import './App.css'
import { useState } from 'react';

function App() {
  const [currentInput, setCurrentInput] = useState('');
  const [items, setItems] = useState([]);

  const handleInput = (e) => {
    setCurrentInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Item added!');
    const newItem = {key: items.length+1, value: currentInput, checked: false}
    const newToDoItems = [...items, newItem];
    setItems(newToDoItems);
    setCurrentInput('');
  }

  const handleCheckboxChange = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

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
            <li key={index+1}>{item.value}   
            <input className="form-check-input mt-0" checked={item.checked} onChange={() => handleCheckboxChange(index)} type="checkbox" value="" aria-label="Checkbox to check off completed items"></input>   
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
