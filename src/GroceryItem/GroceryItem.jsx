import { FiTrash2 } from 'react-icons/fi';

import classes from './GroceryItem.module.css';

const GroceryItem = () => {
  return (
    <div className={classes.item}>
      <p className={classes.text}>This is my grocery item</p>
      <div className={classes.iconContainer}>
        <FiTrash2 />
        <FiTrash2 />
      </div>
    </div>
  )
}

export default GroceryItem;