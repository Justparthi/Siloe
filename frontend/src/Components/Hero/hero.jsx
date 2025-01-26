import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';
import heroImage from '../../assets/hero.png';

const Hero = () => {
    return (
        <div className="hero-abstract">
            <div className="hero-content-wrapper">
                <div className="hero-geometric-bg">
                    <div className="hero-content-flex">
                        <div className="hero-text-section">
                            <h1>Urban <span>Sustainable</span> Fashion</h1>
                            <p>Redefining style through conscious design and innovative materials.</p>
                            
                            <div className="hero-action-group">
                                <Link to="/mens" className="hero-cta">
                                    Explore Collections
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </Link>
                                
                                <div className="hero-metrics">
                                    <div className="metric">
                                        <span>+280</span>
                                        <small>Eco Designs</small>
                                    </div>
                                    <div className="metric">
                                        <span>92%</span>
                                        <small>Recycled Materials</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="hero-image-container">
                            <img 
                                src={heroImage} 
                                alt="Sustainable Fashion Collection" 
                                className="hero-image" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
