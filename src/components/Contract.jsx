import React from 'react'
import "./assets/investor.css"

function Contract() {
    return (
        <div className="investor-contract">
            <input type="text" className="search-input" name="search" id="search" placeholder="Search Contract" />
            <button className="search-button">Search</button>
            <div className="contract-project">
                <img src={require("./assets/Oval.png")} alt="User Profile" className="contract-project-img" />
                <div className="contract-project-info">
                    <h1 className="contract-project-heading">Project Alpha</h1>
                    <div className="info-group">
                        <p className="ig-bold">Entrepreneur:&nbsp;</p>
                        <p className="ig-light">Alice Johnson</p>
                    </div>
                    <div className="info-group">
                        <p className="ig-bold">Investor:&nbsp;</p>
                        <p className="ig-light">Bob Smith</p>
                    </div>
                    <div className="info-group">
                        <p className="ig-bold">Status:&nbsp;</p>
                        <p className="ig-light">In Progress</p>
                    </div>
                </div>
                <button className="tracking-button">Tracking</button>
            </div>
            <div className="contract-project">
                <img src={require("./assets/Oval.png")} alt="User Profile" className="contract-project-img" />
                <div className="contract-project-info">
                    <h1 className="contract-project-heading">Project Beta</h1>
                    <div className="info-group">
                        <p className="ig-bold">Entrepreneur:&nbsp;</p>
                        <p className="ig-light">Charlie Brown</p>
                    </div>
                    <div className="info-group">
                        <p className="ig-bold">Investor:&nbsp;</p>
                        <p className="ig-light">David Lee</p>
                    </div>
                    <div className="info-group">
                        <p className="ig-bold">Status:&nbsp;</p>
                        <p className="ig-light">Completed</p>
                    </div>
                </div>
                <button className="tracking-button">Tracking</button>
            </div>
            <div className="contract-project">
                <img src={require("./assets/Oval.png")} alt="User Profile" className="contract-project-img" />
                <div className="contract-project-info">
                    <h1 className="contract-project-heading">Project Gamma</h1>
                    <div className="info-group">
                        <p className="ig-bold">Entrepreneur:&nbsp;</p>
                        <p className="ig-light">Emma White</p>
                    </div>
                    <div className="info-group">
                        <p className="ig-bold">Investor:&nbsp;</p>
                        <p className="ig-light">Frank Thomas</p>
                    </div>
                    <div className="info-group">
                        <p className="ig-bold">Status:&nbsp;</p>
                        <p className="ig-light">Pending</p>
                    </div>
                </div>
                <button className="tracking-button">Tracking</button>
            </div>
        </div>
    )
}

export default Contract