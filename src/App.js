import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListItems from './components/list/ListItems';
import Stat from './components/Stat';
import './index.css';

const App = () => {
  return ( 
    <>
      <Header />
      <Form />
      <ListItems />
      <Stat />
    </>
   );
}
 
export default App;