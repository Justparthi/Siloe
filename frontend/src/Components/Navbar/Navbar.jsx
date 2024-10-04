import React, { useContext, useRef, useState } from 'react';
import './Navbar.css'
import cartIcon from '../../assets/cart_icon.png' 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import logo from '../assets/logo.png'
import nav_drop from '../../assets/dropdown_icon.png'
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const menuRef = useRef();
    const {getTotalCartItems} = useContext(ShopContext)

    const dropdown_toggle = (e) =>{
          menuRef.current.classList.toggle('nav-menu-visible');
          e.target.classList.toggle('open');
    }



    return (
        <div className='navbar'> 
            <div className='nav-logo'>
              
            <Link style={{textDecoration: 'none', userSelect:"none"}} to='/'><p>Siloé</p></Link>
              
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_drop} alt="" />
            <ul ref={menuRef} className='nav-menu'>
              <li><Link style={{textDecoration: 'none'}} to='/'>Home</Link></li>
              <li><Link style={{textDecoration: 'none'}} to='/mens'>Mens</Link></li>
              <li><Link style={{textDecoration: 'none'}} to='/womens'>Womens</Link></li>
              <li><Link style={{textDecoration: 'none'}} to='kids' >Kids</Link></li>
            </ul>
            <div className='nav-login-cart'>
              {localStorage.getItem('auth-token')?
              <button onClick={() => {localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link style={{textDecoration: 'none'}} to='/login'><button>Login</button></Link>}

              <Link to='/cart' style={{color:"white", textDecoration:'none'}}><img src={cartIcon} alt="" /></Link>
              <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>

            
            
        </div>
    );
}

export default Navbar;


{/* <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
</svg>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-danger"><Link style={{textDecoration: 'none'}} to='/'>Home</Link></a></li>
        <li><a href="#" class="nav-link px-2"><Link style={{textDecoration: 'none'}} to='/mens'>Mens</Link></a></li>
        <li><a href="#" class="nav-link px-2"><Link style={{textDecoration: 'none'}} to='/womens'>Womens</Link></a></li>
        <li><a href="#" class="nav-link px-2"><Link style={{textDecoration: 'none'}} to='kids' >Kids</Link></a></li>
        {/* <li><a href="#" class="nav-link px-2">About</a><Link>Menu</Link></li> */}
      // </ul>

      // <div class="col-md-3 text-end">
      //   <button type="button" class="btn btn-outline-danger me-2"><Link style={{textDecoration: 'none'}} to='/login'>Login</Link></button>
      //   <button type="button" class="btn btn-danger"><Link to='/cart' style={{color:"white", textDecoration:'none'}}>Cart</Link></button>
      //    */}

        {/* <img src={cartIcon} alt="mdo" width="32" height="32" class="rounded-circle"/>
            <div className='nav-cart-count'>0</div>
         */}
{/* 
      </div>
    </header>
  </div> */}