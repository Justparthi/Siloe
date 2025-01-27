import React, { useContext, useState } from 'react';
import star_icon from '../../assets/star_icon.png';
import star_dull from '../../assets/star_dull_icon.png';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [showToast, setShowToast] = useState(false);


    const sizeOptions = ['S', 'M', 'L', 'XL', 'XXL'];


    const handleAddToCart = () => {
        addToCart(product.id);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    };

    return (
        <div className='product-display' onClick={() => window.scrollTo(0, 10)}>
            <div className='product-left'>
                <div className='product-image-list'>
                    {[...Array(4)].map((_, index) => (
                        <div 
                            key={index}
                            className={`thumbnail-wrapper ${selectedImage === index ? 'active' : ''}`}
                            onClick={() => setSelectedImage(index)}
                        >
                            <img src={product.image} alt="" />
                        </div>
                    ))}
                </div>
                <div className='product-main-image'>
                    <div className="image-container">
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>
            </div>

            <div className='product-right'>
                <div className="product-info">
                    <h1 className="product-title">{product.name}</h1>
                    
                    <div className="rating-container">
                        <div className="stars">
                            {[...Array(5)].map((_, index) => (
                                <img 
                                    key={index} 
                                    src={index < 4 ? star_icon : star_dull} 
                                    alt="rating star"
                                />
                            ))}
                        </div>
                        <span className="review-count">(123 reviews)</span>
                    </div>

                    <div className="price-container">
                        <div className="price-new">${product.new_price}</div>
                        <div className="price-old">${product.old_price}</div>
                        <div className="discount-badge">
                            {Math.round(((product.old_price - product.new_price) / product.old_price) * 100)}% OFF
                        </div>
                    </div>

                    <div className="description">
                        Add this versatile piece to your wardrobe and enjoy effortless style wherever you go. 
                        Whether you pair it with anything or wear it on its own, our Siloé is sure to become a favorite.
                    </div>

                    <div className="size-section">
                        <div className="size-header">
                            <h2>Size Available</h2>
                            <span className="size-guide">Size Guide</span>
                        </div>
                        <div className="size-options">
                            {sizeOptions.map((size) => (
                                <button
                                    key={size}
                                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="cart-action-container">
                        <button 
                            className="add-to-cart"
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </button>
                        
                        {showToast && (
                            <div className="minimal-toast">
                                Added to cart ✓
                            </div>
                        )}
                    </div>

                    <div className="product-meta">
                        <div className="meta-item">
                            <span className="meta-label">Category:</span>
                            <span className="meta-value">Unisex, Athleisure, Crop Top</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Tags:</span>
                            <span className="meta-value">Model, Latest</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
