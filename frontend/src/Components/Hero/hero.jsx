import React from 'react';
import "./hero.css"
import hero_image from '../../assets/hero.png'
// import heroBack from '../assets/hero_imag.png'
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div className='hero'>

{/* 
        <div className='hero-left'>
          <h2>Discover Bold & Sustainable Clothing</h2>
          <div>
            <div>
              <p>Shop our latest collections made with eco-friendly materials. Find statement pieces that reflect your unique style. Free Shipping on all orders!</p>
            </div>
            <div className='hero-latest-btn'>
              <div>Shop Now</div>
            </div>
          </div>
          <div className='hero-right'>
            <img src={heroBack} alt="" />

          </div>
        </div> */}




    <section id="title">

    


  
  {/* <br /><br /><br /><br /> */}




  


<div class="px-4 pt-5 text-center border-bottom">
    <h1 class="display-4 fw-bold text-body-emphasis">Discover Bold & Sustainable Clothing</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Shop our latest collections made with eco-friendly materials. Find statement pieces that reflect your unique style. Free Shipping on all orders!</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <Link style={{textDecoration: 'none'}} to='/mens'><button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Shop Now</button></Link>
        <Link to='/contact'><button type="button" class="btn btn-outline-secondary btn-lg px-4">Contact Us</button></Link>
      </div>
    </div>
    <div class="overflow-hidden" style={{maxHeight: "30vh"}}>
      <div class="container px-5">
        <img src={hero_image} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example" width="700" height="500" loading="lazy"/>
      </div>
    </div>
  </div> 






{/* <div class="container col-xxl-8 px-4 pt-5">
  <div class="row flex-lg-row-reverse align-items-center g-5 pt-5">
    <div class="col-10 col-sm-8 col-lg-6">
      <img src={hero_image} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" height="200" 
        loading="lazy"/>
    </div>
    <div class="col-lg-6">
    <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Discover Bold & Sustainable Clothing</h1><br />
        <p class="lead">Shop our latest collections made with eco-friendly materials. Find statement pieces that reflect your unique style. Free Shipping on all orders!</p>

      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" class="btn btn-light btn-lg px-4 me-md-2"><svg xmlns="http://www.w3.org/2000/svg"
            width="16" height="16" fill="currentColor" class="bi bi-apple mb-1" viewBox="0 0 16 16">
            <path
              d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
            <path
              d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
          </svg> Download</button>
        <button type="button" class="btn btn-outline-light btn-lg px-4"><svg xmlns="http://www.w3.org/2000/svg"
            width="16" height="16" fill="currentColor" class="bi bi-google-play mb-1" viewBox="0 0 16 16">
            <path
              d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
          </svg> Download</button>
      </div>
    </div>
  </div>
</div> */}
</section>






   </div>
    );
}

export default Hero;
