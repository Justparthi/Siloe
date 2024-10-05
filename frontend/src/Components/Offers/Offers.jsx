import React from 'react';
import './Offers.css'
import exclusive_img from '../../assets/exclusive_image.png'
import { Link } from 'react-router-dom';

const Offers = () => {
    return (
        <div className='offers'> 
            {/* <div className='offers-left'>
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCT </p>
                <button>Check Now</button>

            </div> */}



{/* <div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">EXCLUSIVE</h1>
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Offers For You</h1>
        <p class="lead">ONLY ON BEST SELLING PRODUCTS</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-danger btn-lg px-4 me-md-2 fw-bold">Check Now</button>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src={exclusive_img} alt="" width="720" />
      </div>
    </div>
  </div> */}

{/* 
  <div class="container my-5" style={{ background: 'linear-gradient(180deg, #c7caff, #e1ffea22 60%)'}}>
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    <div class="col-10 col-sm-8 col-lg-6">
        <img src={exclusive_img} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="400" loading="lazy"/>
      </div>
      <div class="col-lg-6">
      <h1 class="display-4 fw-bold lh-1 text-body-emphasis">EXCLUSIVE</h1>
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Offers For You</h1>
        <p class="lead">ONLY ON BEST SELLING PRODUCTS</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
  
        </div>
      </div>
      


    </div>
  </div>
 */}

  
  <div class="container my-5">
  <div class="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
    <h1 class="text-body-emphasis">Be the First to Explore Our Latest Styles!</h1>
    <p class="col-lg-6 mx-auto mb-4">
    Discover the freshest trends and must-have pieces in our New Arrivals section. Whether you're looking for chic dresses, stylish tops, or trendy accessories, we have something for everyone. Shop now to stay ahead of the fashion curve!
        </p>
        <Link style={{textDecoration: 'none'}} to='/womens'><button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Check Now</button></Link>
  </div>
</div>

  {/* <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={exclusive_img} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
      <h1 class="display-4 fw-bold lh-1 text-body-emphasis">EXCLUSIVE</h1>
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Offers For You</h1>
        <p class="lead">ONLY ON BEST SELLING PRODUCTS</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
  
        </div>
      </div>
    </div>
  </div> */}
            
        </div>
    );
}

export default Offers;
