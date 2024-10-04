import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom'
import BreadCrum from '../Components/BreadCrum/BreadCrum.jsx';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct.jsx';

const Product = () => {

    const {all_product} = useContext(ShopContext)
    const {productId} = useParams()
    const product = all_product.find((e) => e.id === Number(productId))
    return (
        <div>
            <BreadCrum product={product} />
            <ProductDisplay product={product}/>
            <DescriptionBox />
            
        </div>
    );
}



export default Product;
