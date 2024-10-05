import React, { useContext, useRef } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/cart_icon.png' 
import nav_drop from '../../assets/menu1.png'
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {

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
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_drop} alt="" height={30} width={30}/>
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
