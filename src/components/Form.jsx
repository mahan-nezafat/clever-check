import React, { useState } from 'react';

const Form = ({ onAddItem }) => {

    // states needed for controlled form method with onChange

    const [number, setNumber] = useState(1)
    const [title, setTitle] = useState('')


    function handleSubmit(e) {

        e.preventDefault();

        if(!title) return;

        // Created newItemList object to pass it ot onAddItem

        const newItemList = {id: Date.now(), number, title, packed: false}
        
        onAddItem(newItemList);

        setNumber(1);
        setTitle('');
    }

    return ( 
        <>
            <div className="add-form">
                    <h3>what do you need to check ? </h3>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <select  onChange={(e) => setNumber(e.target.value)}>
                        {
                            Array.from({ length: 20 }, ((_, index) => index + 1)).map(num => {
                              return  <option key={num} value={num}>{num}</option>
                            })
                        }
                    </select>
                    <input type="text" placeholder='Item...' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <button>Add</button>
                </form>
            </div>
        </>
     );
}
 
export default Form;