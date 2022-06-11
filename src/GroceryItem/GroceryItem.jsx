import { FiTrash2 } from 'react-icons/fi';
import { AiTwotoneEdit } from 'react-icons/ai';

import classes from './GroceryItem.module.css';

const GroceryItem = ({ name, id }) => {
  return (
    <div className={classes.item}>
      <p className={classes.text}>{name}</p>
      <div className={classes.iconContainer}>
        <AiTwotoneEdit className={classes.check} />
        <FiTrash2 className={classes.trash} />
      </div>
    </div>
  )
}

export default GroceryItem;