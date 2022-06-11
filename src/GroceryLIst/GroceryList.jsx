import { useEffect, useState } from 'react';

import { MdOutlineDoubleArrow } from 'react-icons/md';

import GroceryItem from '../GroceryItem/GroceryItem';

import classes from './GroceryList.module.css';

const GroceryList = () => {

  const [ items, setItems ] = useState([]);
  const [ selectedItem, setSelectedItem ] = useState({});
  const [ itemName, setItemName ] = useState('');
  const [ error, setEror ] = useState('to nije dobro');

  useEffect(() => {
    fetchItemsFromStorage();
  }, []);

  const fetchItemsFromStorage = () => {
    const data = JSON.parse(localStorage.getItem('grocery-items')) || [];
    setItems(data);
  }

  const addItemName = e => {
    const value = e.target.value;
    setItemName(value);
  }

  const formSubmitHandler = e => {
    e.preventDefault();
    addNewItemToList(selectedItem);
    setItemName('');
    fetchItemsFromStorage();
  }

  const createGroceryItem = (item) => {
    const newItem = {
      name: itemName
    }
    if(item.id) {
      newItem.id = item.id;
    } else {
      newItem.id = Math.floor(Math.random() * 10000000000)
    }
    return newItem;
  }

  const addNewItemToList = (item) => {
    const itemsToStore = [...items];
    const newItem = createGroceryItem(selectedItem);
    if(!item.id) {
      itemsToStore.push(newItem);
    } else {
      const index = itemsToStore.findIndex(i => i.id === item.id);
      itemsToStore.splice(index, 1, newItem);
    }
    storeItemsToStorage(itemsToStore);
  }

  const storeItemsToStorage = (items) => {
    localStorage.setItem('grocery-items', JSON.stringify(items));
  }

  const selectItem = id => {
    const item = items.find(i => i.id === id);
    setSelectedItem(item);
    setItemName(item.name);
  }
  
  const deleteItem = id => {
    const filteredItems = items.filter(item => item.id !== id);
    storeItemsToStorage(filteredItems);
    fetchItemsFromStorage();
  }
  
  return (
    <div className={classes.list}>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <input 
          type="text"
          className={classes.itemInput}
          onChange={addItemName}
          value={itemName || ''} />
        <button className={classes.addButton}>
          <MdOutlineDoubleArrow className={classes.buttonIcon} />
        </button>
      </form>
      {items && items.map(item => <GroceryItem key={item.id} selectItem={selectItem} deleteItem={deleteItem} {...item} />)}
    </div>
  )
}

export default GroceryList