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

  return ( 
    <>
      <div className='app'>
        <Header />
        <Form onAddItem={handleAddItem} />
        <ListItems items={items} />
        <Stat />
      </div>
    </>
   );
}
 
export default App;