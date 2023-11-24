// import { useEffect } from "react";
import ListItem from "../ListItem";
import PropTypes from 'prop-types';


const DisplayToDoItems = ({items,currentEditableIndex, setCurrentEditableIndex, updatedInput, setUpdatedInput, setItems }) => {
   
    return(
        <div> 
            <div className="d-flex justify-content-between">
                <h6>To-Do Items</h6>
                <h6>Mark as complete</h6>
                <h6>Modify</h6>
            </div>
        <ul>
            <ListItem 
            items={items} 
            currentEditableIndex={currentEditableIndex} 
            setCurrentEditableIndex={setCurrentEditableIndex}
            updatedInput={updatedInput}
            setUpdatedInput={setUpdatedInput}
            setItems={setItems}
            />            
        </ul>
        </div>
        )
}

DisplayToDoItems.propTypes = {
    setCurrentEditableIndex: PropTypes.func.isRequired,
    setUpdatedInput: PropTypes.func.isRequired,
    updatedInput: PropTypes.string.isRequired,
    currentEditableIndex: PropTypes.number.isRequired,
    currentInput: PropTypes.string.isRequired,
    setCurrentInput: PropTypes.func.isRequired,
    setItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
  };

export default DisplayToDoItems;