import { useEffect, useState } from 'react';

import GroceryItem from '../GroceryItem/GroceryItem';

import classes from './GroceryList.module.css';

const GroceryList = () => {

  const [ items, setItems ] = useState([]);

  useEffect(() => {
    fetchItemsFromStorage();
  }, []);

  const fetchItemsFromStorage = async () => {
    const data = await JSON.parse(localStorage.getItems('grocery-items')) || [];
    setItems(data);
  }
  
  return (
    <div className={classes.list}>
      <GroceryItem />
      <GroceryItem />
      <GroceryItem />
    </div>
  )
}

export default GroceryList