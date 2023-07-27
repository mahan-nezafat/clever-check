import React from 'react';

const Stat = ({ items }) => {

    if(!items.length) return (
        
        <div className="stats">
            <p>write your needed items</p>
        </div>
    );

    let itemNumbers = items.length;
    let packedItems = items.filter(item => item.packed).length;
    let percent = Math.round((packedItems / itemNumbers) * 100);
   
    return ( 
        <>
            <div className="stats">
               
                {
                    percent === 100 ? <p>you have packed everything and are ready to go</p>
                    
                    :
                    
                    <p>you have {itemNumbers} items on your list, and you already packed {packedItems} {`(${percent}%)`}</p>
                    
                }
            </div>
        </>
     )
}
 
export default Stat;