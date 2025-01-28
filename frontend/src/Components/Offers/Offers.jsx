import React from 'react';
import './Offers.css'
import { Link } from 'react-router-dom';

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-container">
                <div className="offers-content">
                    <div className="offers-text">
                        <h1>Be the First to Explore Our Latest Styles!</h1>
                        <p>Discover the freshest trends and must-have pieces in our New Arrivals section. Whether you're looking for chic dresses, stylish tops, or trendy accessories, we have something for everyone.</p>
                        <div className="offers-actions">
                            <Link to='/womens' className="btn-check-now">Check Now</Link>
                            <div className="offers-stats">
                                <div className="stat">
                                    <span>50+</span>
                                    <p>New Styles</p>
                                </div>
                                <div className="stat">
                                    <span>30%</span>
                                    <p>Discount</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Offers;
