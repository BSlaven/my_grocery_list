import GroceryItem from '../GroceryItem/GroceryItem';

import classes from './GroceryList.module.css';

const GroceryList = () => {
  return (
    <div className={classes.list}>
      <GroceryItem />
      <GroceryItem />
    </div>
  )
}

export default GroceryList