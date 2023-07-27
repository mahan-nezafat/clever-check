import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListItems from './components/list/ListItems';
import Stat from './components/Stat';
import './index.css';

const App = () => {

  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems(items => [...items, newItem]);
  }

  function handleDelete(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleCheck(id) {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item));
  }

  return ( 
    <>
      <div className='app'>
        <Header />
        <Form onAddItem={handleAddItem} />
        <ListItems items={items} onDeleteItem={handleDelete} onCheckItem={handleCheck} />
        <Stat />
      </div>
    </>
   );
}
 
export default App;