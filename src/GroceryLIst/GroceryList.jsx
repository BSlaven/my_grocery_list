import { useEffect, useState } from 'react';

import { MdOutlineDoubleArrow } from 'react-icons/md';

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
  }

  const formSubmitHandler = e => {
    e.preventDefault();
    storeItemsToStorage();
  }

  const storeItemsToStorage = () => {
    const itemsToStore = [...items];
    localStorage.setItem('grocery-items', JSON.stringify(itemsToStore));
    fetchItemsFromStorage();
  } 
  
  return (
    <div className={classes.list}>
      <form onSubmit={formSubmitHandler}>
        <input 
          type="text"
          className={classes.itemInput}
          onChange={addItemName}
          value={selectedItem.name || itemName} />
        <button>
          <MdOutlineDoubleArrow />
        </button>
      </form>
      <GroceryItem />
      <GroceryItem />
      <GroceryItem />
    </div>
  )
}

export default GroceryList