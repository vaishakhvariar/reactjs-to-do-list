import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [currentInput, setCurrentInput] = useState('');
  const [items, setItems] = useState([]);
  const [currentEditableIndex, setCurrentEditableIndex] = useState(null);
  const [updatedInput, setUpdatedInput] = useState('');

  useEffect(()=>{
    const localItems = JSON.parse(localStorage.getItem('items')); 
    if (localItems) {
    setItems(localItems);
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('items',JSON.stringify(items));
  }, [items])

  const handleInput = (e) => {
    setCurrentInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentEditableIndex(null);
    if(currentInput==='') {return;}
    console.log('Item added!');
    const newItem = {key: items.length+1, value: currentInput, checked: false}
    const newToDoItems = [...items, newItem];
    setItems(newToDoItems);
    setCurrentInput('');
  }

  const handleUpdate = (index) => {
    if(updatedInput===''){
      return;
    }
    setItems((prevItems)=> {
    const updatedItem = {key: index, value: updatedInput, checked: false}
    console.log(updatedItem);
    const updatedToDoItems = [...prevItems];
    updatedToDoItems[index] = updatedItem;
    setCurrentEditableIndex(null);
    setUpdatedInput('');
    return updatedToDoItems;
  }
    );
}


  const handleCheckboxChange = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleEdit = (index) => {
    setCurrentEditableIndex(index);   
  }

  const handleUpdatedInput = (e) => {
    setUpdatedInput(e.target.value)
  }

  const handleDelete = (index) => {
    setItems((prevItems) => 
    prevItems.filter((_,i)=>i!==index)
    );
  }

  return (
    <div> 
      <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">To-Do Item</span>
        <input value={currentInput} onChange = {handleInput} type="text" className="form-control" placeholder="Add your to-do item" aria-label="Add your to-do item" aria-describedby="basic-addon2" />
        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add item</button>
        </div>
      </form>
      <div>
        <ul>
          {items.map((item, index) => {
            return(
            <li key={index+1}>
            <div className="d-flex justify-content-between">
            {currentEditableIndex===index?
            <input value={updatedInput} onChange = {handleUpdatedInput} type="text" className="form-control" placeholder="Edit this item" aria-label="Edit this item" aria-describedby="basic-addon2" />
            :<span>{item.value}</span>
            }
            <div>  
            <input className="form-check-input mt-0" checked={item.checked} onChange={() => handleCheckboxChange(index)} type="checkbox" value="" aria-label="Checkbox to check off completed items"></input> 
            {currentEditableIndex!==index?
            <button className="btn btn-outline-secondary" onClick={()=>handleEdit(index)} type="button" id="button-addon3">Edit item</button>
            :<button className="btn btn-outline-secondary" onClick={()=>handleUpdate(index)} type="submit" id="button-addon3">Update item</button> 
            }
            <button className="btn btn-outline-secondary" onClick={()=> handleDelete(index)} type="button" id="button-addon4">Delete item</button>
            </div>
            </div>
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
