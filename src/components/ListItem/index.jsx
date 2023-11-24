import PropTypes from 'prop-types';

const ListItem = (props) => {

    const handleUpdatedInput = (e) => {
        props.setUpdatedInput(e.target.value)
      }

    const handleCheckboxChange = (index) => {
        props.setItems((prevItems) =>
            prevItems.map((item, i) =>
                i === index ? { ...item, checked: !item.checked } : item
            )
            );
    };
    const handleEdit = (index) => {
        props.setCurrentEditableIndex(index);   
      }

    const handleUpdate = (index) => {
        if(props.updatedInput===''){
          return;
        }
        props.setItems((prevItems)=> {
            const updatedItem = {key: index, value: props.updatedInput, checked: false}
            console.log(updatedItem);
            const updatedToDoItems = [...prevItems];
            updatedToDoItems[index] = updatedItem;
            props.setCurrentEditableIndex(null);
            props.setUpdatedInput('');
            return updatedToDoItems;
          }
        );
    }

    const handleDelete = (index) => {
        props.setItems((prevItems) => 
        prevItems.filter((_,i)=>i!==index)
        );
      }

    return (
      <div>
            {props.items.map((item, index) => {
            return(
            <li key={index+1}>
            <div className="d-flex justify-content-between">
            {props.currentEditableIndex===index?
            <input value={props.updatedInput} onChange = {handleUpdatedInput} type="text" className="form-control" placeholder="Edit this item" aria-label="Edit this item" aria-describedby="basic-addon2" />
            :<span>{item.value}</span>
            } 
            <input className="form-check-input mt-0" checked={item.checked} onChange={() => handleCheckboxChange(index)} type="checkbox" value="" aria-label="Checkbox to check off completed items"></input> 
            <div> 
            {props.currentEditableIndex!==index?
            <button className="btn btn-outline-secondary" onClick={()=>handleEdit(index)} type="button" id="button-addon3">Edit item</button>
            :<button className="btn btn-outline-secondary" onClick={()=>handleUpdate(index)} type="submit" id="button-addon3">Update item</button> 
            }
            <button className="btn btn-outline-secondary" onClick={()=> handleDelete(index)} type="button" id="button-addon4">Delete item</button>
            </div>
            </div>
            </li>
            )
          })}
      </div>
      )
}

ListItem.propTypes = {
    setUpdatedInput: PropTypes.func.isRequired,
    updatedInput: PropTypes.string.isRequired,
    currentEditableIndex: PropTypes.number.isRequired,
    setCurrentEditableIndex: PropTypes.func.isRequired,
    currentInput: PropTypes.string.isRequired,
    setCurrentInput: PropTypes.func.isRequired,
    setItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
  };

export default ListItem;