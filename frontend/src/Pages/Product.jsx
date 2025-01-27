import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrum/BreadCrum.jsx';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx';
import './css/Product.css';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    return (
        <div className="product-page">
            <div className="product-page-container">
                <div className="product-page-content">
                    <BreadCrum product={product} />
                    <ProductDisplay product={product} />
                    <div className="description-section">
                        <DescriptionBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
