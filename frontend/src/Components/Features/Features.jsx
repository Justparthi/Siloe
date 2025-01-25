import React from 'react';
import './Features.css';

const Features = () => {
    const featureData = [
        {
            icon: "🚀",
            title: "Innovative Design",
            description: "Cutting-edge fashion that challenges traditional aesthetics."
        },
        {
            icon: "♻️",
            title: "Sustainable Materials",
            description: "Eco-conscious fabrics that minimize environmental impact."
        },
        {
            icon: "🤖",
            title: "Personal Styling",
            description: "AI-powered recommendations tailored to your unique style."
        }
    ];

    return (
        <section className="features-section">
            <div className="features-container">
                {featureData.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">{feature.icon}</div>
                        <div className="feature-content">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;
