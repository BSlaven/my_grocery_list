import { FiTrash2 } from 'react-icons/fi';
import { AiTwotoneEdit } from 'react-icons/ai';

import classes from './GroceryItem.module.css';

const GroceryItem = ({ name, id, deleteItem, selectItem }) => {
  return (
    <div className={classes.item}>
      <p className={classes.text}>{name}</p>
      <div className={classes.iconContainer}>
        <AiTwotoneEdit className={classes.edit} onClick={() => selectItem(id)} />
        <FiTrash2 className={classes.trash} onClick={() => deleteItem(id)} />
      </div>
    </div>
  )
}

export default GroceryItem;