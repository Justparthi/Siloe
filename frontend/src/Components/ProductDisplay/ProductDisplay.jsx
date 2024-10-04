import React, { useContext } from 'react';
import star_icon from '../../assets/star_icon.png'
import star_dull from '../../assets/star_dull_icon.png'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext)
    return (
        <div className='productdisplay' onClick={window.scrollTo(0,10)}>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull} alt="" />
                    (123)
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old" style={{textDecoration : 'line-through', color: 'grey'}}>
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                Add this versatile piece to your wardrobe and enjoy effortless style wherever you go. Whether you pair it with anything or wear it on its own, our Siloé is sure to become a favorite.                </div>
                <div className='productdisplay-right-size'>
                    <h1>Size Available</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button className='productdisplay-right-button' onClick={() => {addToCart(product.id)}}>Add To Cart</button>
                <p className='productdisplay-right-category'><span>Category :</span> Unisex, Athleisure, Crop Top </p>
                <p className='productdisplay-right-category'><span>Tags :</span> Model, Latest</p>
            </div>
            
        </div>
    );
}

export default ProductDisplay;
