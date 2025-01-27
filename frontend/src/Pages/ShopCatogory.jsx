import React, { useContext } from 'react';
import './css/shopCatogery.css';
import { ShopContext } from '../Context/ShopContext.jsx';
import Item from '../Components/items/item.jsx';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    
    const filteredProducts = all_product.filter(item => props.category === item.category);

    return (
        <div className='shop-category'>
            <div className="banner-container">
                <img src={props.banner} alt="" className='category-banner' />
                <div className="banner-overlay" />
                <div className="category-info">
                    <div className="results-counter">
                        <div className="counter-box">
                            <span className="current-range">1-12</span>
                            <span className="total-count">of 36 products</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="category-grid-container">
                <div className="grid-header">
                    <div className="decorative-line" />
                    <h2 className="category-title">{props.category}</h2>
                    <div className="decorative-line" />
                </div>

                <div className='products-grid'>
                    {filteredProducts.map((item, i) => (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ))}
                </div>
                
                <div className='end-section'>
                    <div className="end-marker">
                        <span className="end-text">End stock</span>
                        <div className="end-line" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopCategory;
