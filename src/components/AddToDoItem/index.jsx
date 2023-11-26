// import { useState } from "react";
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

const AddToDoItem = (props) => {

    const handleInput = (e) => {
        props.setCurrentInput(e.target.value);
      }

      const handleSubmit = (e) => {
        e.preventDefault(); 
        // setCurrentEditableIndex(null);
        if(props.currentInput==='') {return;}
        console.log('Item added in child component!');
        const newItem = {key: props.items.length+1, value: props.currentInput, checked: false}
        const newToDoItems = [...props.items, newItem];
        props.setItems(newToDoItems);
        props.setCurrentInput('');
        toast.success('Added new item');
      }

    return(
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">To-Do Item</span>
                <input value={props.currentInput} onChange = {handleInput} type="text" className="form-control" placeholder="Add your to-do item" aria-label="Add your to-do item" aria-describedby="basic-addon2" />
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add item</button>
            </div>
        </form>
    )
}

AddToDoItem.propTypes = {
    currentInput: PropTypes.string.isRequired,
    setCurrentInput: PropTypes.func.isRequired,
    setItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
  };

export default AddToDoItem;