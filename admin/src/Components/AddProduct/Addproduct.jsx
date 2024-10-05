import React, { useState } from 'react';
import './Addproduct.css'

const Addproduct = () => {
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: "",
    })

    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value})
    }

    const Add_Product = async () => {
        console.log(productDetails);
        let product = productDetails;

        await fetch('https://postecom-backend.onrender.com/addproduct', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        }).then((resp) => resp.json()).then((data) => {
            data.success ? alert("Product Added") : alert("Failed")
        })
    }

    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type Here'/>
            </div>
            <div className='addproduct-price'>
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type Here'/>
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type Here'/>
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kids</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <p>Image URL</p>
                <input value={productDetails.image} onChange={changeHandler} type="text" name='image' placeholder='Enter image URL'/>
            </div>
            {productDetails.image && (
                <div className="addproduct-itemfield">
                    <img src={productDetails.image} className='addproduct-thumbnail-img' alt="Product" />
                </div>
            )}
            <button onClick={Add_Product} className='addproduct-btn'>Add</button>
        </div>
    );
}

export default Addproduct;