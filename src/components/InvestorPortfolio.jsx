import React from 'react'
import "./assets/investor.css";

function InvestorPortfolio() {
    return (
        <div className="investor-portfolio">
            <h1 className="investor-portfolio-heading">My Investments</h1>
            <p className="portfolio-text">View the projects you have invested in</p>
            <div className="invested-project">
                <img className='investor-portfolio-img' src={require("./assets/Oval.png")} alt="Profile Image" />
                <div className="invested-project-container">
                    <h1 className="invested-project-heading">Project Titan</h1>
                    <p className="invested-project-text">A next-generation space exploration mission to Saturn's moon, Titan.</p>
                </div>
                <button className="invested-project-button">View Details</button>
            </div>
            <div className="invested-project">
                <img className='investor-portfolio-img' src={require("./assets/Oval.png")} alt="Profile Image" />
                <div className="invested-project-container">
                    <h1 className="invested-project-heading">Project Phoenix</h1>
                    <p className="invested-project-text">Renewable energy initiative focused on building the world's largest solar farm in
                        the Sahara Desert.
                    </p>
                </div>
                <button className="invested-project-button">View Details</button>
            </div>
            <div className="invested-project">
                <img className='investor-portfolio-img' src={require("./assets/Oval.png")} alt="Profile Image" />
                <div className="invested-project-container">
                    <h1 className="invested-project-heading">Project Aurora</h1>
                    <p className="invested-project-text">Advanced AI research and development for autonomous systems.
                    </p>
                </div>
                <button className="invested-project-button">View Details</button>
            </div>
        </div>
    )
}

export default InvestorPortfolio