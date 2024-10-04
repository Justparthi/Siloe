import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <dv className="descriptionbox-navigation">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fad">Reviews (69)</div>
            </dv>
            <div className='descriptionbox-description'>
                <p>Indulge in effortless elegance with our Siloé. This type of clothing item embodies contemporary style and timeless sophistication, crafted to elevate every aspect of your wardrobe. 
                Create striking ensembles by pairing with accessories, ensuring every outfit is a testament to your individuality.
                </p>

                <p>                Preserve its pristine condition with simple care methods—machine washable for convenience, maintaining its elegance wash after wash.
                </p>
            </div>
        </div>
    );
}

export default DescriptionBox;
