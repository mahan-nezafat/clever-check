import React from 'react';

const ListItem = ({ item, onDeleteItem, onCheckItem }) => {



    return ( 
        <>
            <li>
                <input type="checkbox" checked={item.packed} onChange={() => onCheckItem(item.id)} />
                <p className={item.packed ? 'line-through' : ''}>
                    <span> {item.number} {item.title}</span>
                   
                </p>
                <button onClick={() => onDeleteItem(item.id)}>&times;</button>
            </li>
        </>
     );
}
 
export default ListItem;