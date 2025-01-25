import React, { useEffect, useState } from 'react';
import './NewCollection.css'
import Item from '../items/item';

const NewCollections = () => {
    const [new_collection, setNew_Collection] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://postecom-backend.onrender.com/newcollections`)
        .then((response) => response.json())
        .then((data) => {
            setNew_Collection(data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching new collections:', error);
            setIsLoading(false);
        });
    }, [])

    return (
        <div className='new-collection'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className='collections'>
                {isLoading ? (
                    <div className='loading'>Loading New Styles...</div>
                ) : (
                    new_collection.map((item, i) =>(
                        <Item 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}/>
                    ))
                )}
            </div>
        </div>
    );
}

export default NewCollections;
