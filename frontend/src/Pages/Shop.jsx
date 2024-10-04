import React from 'react';
import Hero from '../Components/Hero/hero';
import Popular from '../Components/Popular/Popular.jsx';
import Offers from '../Components/Offers/Offers.jsx';
import NewCollections from '../Components/NewCollections/NewCollections.jsx';
import Newsletter from '../Components/Newsletter/Newsletter.jsx';
import Features from '../Components/Features/Features.jsx';

const Shop = () => {
    return (
        <div>
            <Hero />
            <Features/>
            <Popular />
            <Offers />
            <NewCollections />
           
        </div>
    );
}

export default Shop;
