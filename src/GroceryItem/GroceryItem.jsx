import { FiTrash2 } from 'react-icons/fi';
import { AiOutlineCheck } from 'react-icons/ai';

import classes from './GroceryItem.module.css';

const GroceryItem = () => {
  return (
    <div className={classes.item}>
      <p className={classes.text}>This is my grocery item</p>
      <div className={classes.iconContainer}>
        <AiOutlineCheck className={classes.check} />
        <FiTrash2 className={classes.trash} />
      </div>
    </div>
  )
}

export default GroceryItem;