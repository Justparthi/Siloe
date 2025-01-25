import React from 'react';
import './item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className='item'>
            <div className="card">
                <Link to={`/product/${props.id}`}>
                    <img 
                        onClick={() => window.scrollTo(0,10)} 
                        src={props.image} 
                        className="card-img-top" 
                        alt={props.name} 
                    />
                </Link>
                <div className="card-body">
                    <p className="card-text">{props.name}</p>
                    <div className='item-prices'>
                        <div className='item-price-new'>
                            $ {props.new_price}
                        </div>
                        <div className='item-price-old'>
                            $ {props.old_price}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Item;
