import './App.css'
import { useEffect, useState } from 'react';
import AddToDoItem from './components/AddToDoItem';
import DisplayToDoItems from './components/DisplayToDoItems';
import { Toaster } from 'react-hot-toast';

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

  return (
    <div> 
      <AddToDoItem currentInput={currentInput} setCurrentInput={setCurrentInput} setItems={setItems} items={items} />
      <DisplayToDoItems 
      items = {items} 
      setItems={setItems}
      currentEditableIndex={currentEditableIndex} 
      setCurrentEditableIndex ={setCurrentEditableIndex}
      updatedInput={updatedInput}
      setUpdatedInput={setUpdatedInput}
      />
      <Toaster />
    </div>
  )
}

export default App
