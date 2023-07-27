import React, { useState } from 'react';
import ListItem from './ListItem';

const ListItems = ({ items, onDeleteItem, onCheckItem, onClearItem }) => {

    const [sortBy, setSortBy] = useState('input');

    let sortedItems;

    if(sortBy === 'input') {
        sortedItems = items
    }

    if(sortBy === 'title') {
        sortedItems = items.slice().sort((a, b) => a.title.localeCompare(b.title));
    }

    if(sortBy === 'packed') {
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return ( 
        <>
          <div className="list">
                
                <ul>
                    {
                        sortedItems.map((item) => {
                            return <ListItem item={item} key={item.id} onDeleteItem={onDeleteItem} onCheckItem={onCheckItem} />

                        })
                    }
                 </ul>
           
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">SORT BY INPUT ORDER</option>
                    <option value="title">SORT BY TITLE</option>
                    <option value="packed">SORT BY PACKED STATUS</option>
                </select>
                <button onClick={onClearItem}>Clear List</button>
            </div>
          </div> 
        </>
     );
}
 
export default ListItems;