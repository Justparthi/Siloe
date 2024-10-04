import React from 'react';
import './item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className='item'>
            <div class="card">
                <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,10)} src={props.image} class="card-img-top" alt="..." /></Link>
                <div class="card-body">
                <p class="card-text">{props.name}</p>
                <div className='item-prices'>
                <div className='item-price-new'>
                    $ {props.new_price}
                </div>
                <div className='item-price-old' style={{textDecoration : 'line-through'}}>
                    {props.old_price}
                </div>
            </div>
  </div>
</div>
        </div>
    );
}

export default Item;
