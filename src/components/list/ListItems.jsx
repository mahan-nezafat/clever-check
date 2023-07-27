import React from 'react';
import ListItem from './ListItem';

const ListItems = ({ items }) => {
    return ( 
        <>
          <div className="list">
            <ul>
                {
                    items.map((item) => {
                        return <ListItem item={item} key={item.id}/>

                    })
                }
            </ul>
          </div> 
        </>
     );
}
 
export default ListItems;