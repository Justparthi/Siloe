import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = (props) => {
  return (
    <div className="item-container">
      <div className="item-card">
        <div className="item-card-inner">
          <Link to={`/product/${props.id}`}>
            <div className="image-wrapper" onClick={() => window.scrollTo(0, 10)}>
              <img 
                src={props.image} 
                alt={props.name}
                className="item-image"
              />
              <div className="image-overlay" />
              
              <div className="corner-accent top-left" />
              <div className="corner-accent top-right" />
              <div className="corner-accent bottom-left" />
              <div className="corner-accent bottom-right" />
            </div>
          </Link>

          <div className="content-wrapper">
            <div className="price-tag">
              <div className="price-content">
                <span className="new-price">${props.new_price}</span>
                {props.old_price && (
                  <span className="old-price">${props.old_price}</span>
                )}
              </div>
            </div>

            <h3 className="item-title">{props.name}</h3>
            
            <div className="action-area">
              <span className="view-details">View Details</span>
              <div className="pulse-dot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
