import { useEffect, useState } from 'react';

import GroceryItem from '../GroceryItem/GroceryItem';

import classes from './GroceryList.module.css';

const GroceryList = () => {

  const [ items, setItems ] = useState([]);
  const [ selectedItem, setSelectedItem ] = useState({});
  const [ itemName, setItemName ] = useState('');

  useEffect(() => {
    fetchItemsFromStorage();
  }, []);

  const fetchItemsFromStorage = async () => {
    const data = await JSON.parse(localStorage.getItem('grocery-items')) || [];
    setItems(data);
  }

  const addItemName = e => {
    const value = e.target.value;
    setItemName(value);
    console.log('calling addItemName function')
  }
  
  return (
    <div className={classes.list}>
      <input 
        type="text"
        className={classes.itemInput}
        onChange={addItemName}
        value={selectedItem.name || itemName} />
      <GroceryItem />
      <GroceryItem />
      <GroceryItem />
    </div>
  )
}

export default GroceryList