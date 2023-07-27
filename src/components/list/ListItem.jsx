import React from 'react';

const ListItem = ({ item }) => {
    return ( 
        <>
            <li>
                <input type="checkbox" checked={item.packed} />
                <span>{item.number}</span>
                <span>{item.title}</span>
                <button>&times;</button>
            </li>
        </>
     );
}
 
export default ListItem;