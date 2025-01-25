import React, { useContext, useRef, useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/cart_icon.png' 
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {getTotalCartItems} = useContext(ShopContext)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className='navbar-modern'>
            <div className='nav-container'>
                <Link to='/' className='brand-logo'>Siloé</Link>
                
                <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`nav-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
                    <ul className='nav-links'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/mens'>Mens</Link></li>
                        <li><Link to='/womens'>Womens</Link></li>
                        <li><Link to='kids'>Kids</Link></li>
                    </ul>

                    <div className='nav-actions'>
                        {localStorage.getItem('auth-token') ? (
                            <button 
                                className='auth-btn' 
                                onClick={() => {
                                    localStorage.removeItem('auth-token');
                                    window.location.replace('/');
                                }}
                            >
                                Logout
                            </button>
                        ) : (
                            <Link to='/login' className='auth-btn'>Login</Link>
                        )}

                        <div className='cart-section'>
                            <Link to='/cart' className='cart-icon'>
                                <img src={cartIcon} alt="Cart" />
                                <span className='cart-count'>{getTotalCartItems()}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
