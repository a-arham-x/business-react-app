import React from 'react'
import "./assets/investor.css"

function InvestorIdeas() {
    return (
        <div className='investor-ideas'>
            <input type="text" className="search-input" name="search" id="search" placeholder="Search Contract" />
            <button className="search-button">Search</button>
            <h1 className="iideas-heading">List of Ideas</h1>
            <p className="iideas-text">Browse through the innovative ideas we're considering for investment.</p>
            <div id="iideas-container">
                <div className="iideas-row">
                    <div className="iideas-idea">
                        <h1 className="iidea-name">AI-Powered Customer Service</h1>
                        <p className="iidea-description">Using machine learning to enhance customer support
                            efficiency and satisfaction.</p>
                        <div className="iideas-buttons">
                            <button className="iideas-btn">View Details</button>
                            <button className="iideas-btn">Make Contract</button>
                        </div>
                    </div>
                    <div className="iideas-idea">
                        <h1 className="iidea-name">Eco-Friendly Packaging</h1>
                        <p className="iidea-description">Innovative sustainable materials for reducing
                            environmental impact.</p>
                        <div className="iideas-buttons">
                            <button className="iideas-btn">View Details</button>
                            <button className="iideas-btn">Make Contract</button>
                        </div>
                    </div>
                </div>
                <div className="iideas-row">
                    <div className="iideas-idea">
                        <h1 className="iidea-name">Personalized Health & Wellness App</h1>
                        <p className="iidea-description">A platform that offers tailored fitness routines and
                            well-being tips.</p>
                        <div className="iideas-buttons">
                            <button className="iideas-btn">View Details</button>
                            <button className="iideas-btn">Make Contract</button>
                        </div>
                    </div>
                    <div className="iideas-idea">
                        <h1 className="iidea-name">Renewable Energy Innovations</h1>
                        <p className="iidea-description">Advancing clean energy technologies for a sustainable
                            future.</p>
                        <div className="iideas-buttons">
                            <button className="iideas-btn">View Details</button>
                            <button className="iideas-btn">Make Contract</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorIdeas