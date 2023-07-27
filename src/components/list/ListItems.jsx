import React from 'react';
import ListItem from './ListItem';

const ListItems = ({ items, onDeleteItem, onCheckItem }) => {
    return ( 
        <>
          <div className="list">
            <ul>
                {
                    items.map((item) => {
                        return <ListItem item={item} key={item.id} onDeleteItem={onDeleteItem} onCheckItem={onCheckItem} />

                    })
                }
            </ul>
          </div> 
        </>
     );
}
 
export default ListItems;