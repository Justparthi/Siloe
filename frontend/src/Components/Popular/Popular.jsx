import React, { useEffect, useState } from 'react';
import './Popular.css'

import Item from '../items/item.jsx';

const Popular = () => {

    const [popular_product, setPopular_Product] = useState([]);

    useEffect(() => {
        fetch('https://postecom-backend.onrender.com/popularwomen')
        .then((response) => response.json())
        .then((data) => setPopular_Product(data));
    },[])



    return (
        <div className='popular'>
            <h1>Popular in Women</h1>
            <hr />
            <div className='popular-item'>
                {popular_product.map((item, i) =>{
                    return <Item 
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}/>
                })}

            </div>
        </div>
    );
}

export default Popular;
