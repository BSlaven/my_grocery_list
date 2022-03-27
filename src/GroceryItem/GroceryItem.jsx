import classes from './GroceryItem.module.css';

const GroceryItem = () => {
  return (
    <div className={classes.item}>
      <p className={classes.text}>This is my grocery item</p>
      
    </div>
  )
}

export default GroceryItem;