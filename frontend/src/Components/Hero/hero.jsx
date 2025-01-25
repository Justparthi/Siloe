import React from 'react';
import "./hero.css"
import hero_image from '../../assets/hero.png'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (

      
        <div className='hero-unique'>
          
            <div className='hero-grid'>
                <div className='hero-content'>
                    <div className='hero-text-overlay'>
                        <h1>Urban <span>Eco</span> Fashion</h1>
                        <p>Redefine your style with sustainable threads that speak volumes</p>
                        <div className='hero-cta'>
                            <Link to='/mens' className='btn-explore'>Explore Collection</Link>
                            <div className='hero-stats'>
                                <div className='stat'>
                                    <span>500+</span>
                                    <p>Eco Designs</p>
                                </div>
                                <div className='stat'>
                                    <span>75%</span>
                                    <p>Recycled Materials</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hero-visual'>
                    <div className='image-wrapper'>
                        <img src={hero_image} alt="Sustainable Fashion" />
                        <div className='image-overlay'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
