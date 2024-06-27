import React from 'react'
import "./assets/entrepreneur.css"

function EntrepreneurSearch() {
    return (
        <div className="entrepreneur-search">
            <h1 className="hiring-heading">Find&nbsp;skilled&nbsp;individuals&nbsp;for&nbsp;your&nbsp;project</h1>
            <p className="hiring-text">Enter&nbsp;the&nbsp;skills&nbsp;you're&nbsp;looking&nbsp;for&nbsp;and&nbsp;contact&nbsp;the&nbsp;best&nbsp;candidates.</p>
            <input type="text" className="search-input ent-input" name="search" id="search" placeholder="UI/UX Design" />
            <button className="search-button">Enter Skills</button>
            <div className="ent-search-skilled-persons">
                <div className="skilled-persons-row">
                    <div className="skilled-person">
                        <img className="skilled-person-img" src={require("./assets/Oval.png")} alt="User Profile" />
                        <div className="ent-skilled-person-about">
                            <p className="ent-skilled-person-name">Alice Johnson</p>
                            <p className="ent-skilled-person-description">Skills: UI/UX Design, Frontend Development</p>
                        </div>
                        <div className="ent-skilled-person-btn-container">
                            <button className="ent-skilled-person-btn">Open Chat</button>
                            <button className="ent-skilled-person-btn">View Details</button>
                        </div>
                    </div>
                    <div className="skilled-person">
                        <img className="skilled-person-img" src={require("./assets/Oval.png")} alt="User Profile" />
                        <div className="ent-skilled-person-about">
                            <p className="ent-skilled-person-name">Alice Johnson</p>
                            <p className="ent-skilled-person-description">Skills: UI/UX Design, Frontend Development</p>
                        </div>
                        <div className="ent-skilled-person-btn-container">
                            <button className="ent-skilled-person-btn">Open Chat</button>
                            <button className="ent-skilled-person-btn">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="skilled-persons-row">
                    <div className="skilled-person">
                        <img className="skilled-person-img" src={require("./assets/Oval.png")} alt="User Profile" />
                        <div className="ent-skilled-person-about">
                            <p className="ent-skilled-person-name">Alice Johnson</p>
                            <p className="ent-skilled-person-description">Skills: UI/UX Design, Frontend Development</p>
                        </div>
                        <div className="ent-skilled-person-btn-container">
                            <button className="ent-skilled-person-btn">Open Chat</button>
                            <button className="ent-skilled-person-btn">View Details</button>
                        </div>
                    </div>
                    <div className="skilled-person">
                        <img className="skilled-person-img" src={require("./assets/Oval.png")} alt="User Profile" />
                        <div className="ent-skilled-person-about">
                            <p className="ent-skilled-person-name">Alice Johnson</p>
                            <p className="ent-skilled-person-description">Skills: UI/UX Design, Frontend Development</p>
                        </div>
                        <div className="ent-skilled-person-btn-container">
                            <button className="ent-skilled-person-btn">Open Chat</button>
                            <button className="ent-skilled-person-btn">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="skilled-persons-row">
                    <div className="skilled-person">
                        <img className="skilled-person-img" src={require("./assets/Oval.png")} alt="User Profile" />
                        <div className="ent-skilled-person-about">
                            <p className="ent-skilled-person-name">Alice Johnson</p>
                            <p className="ent-skilled-person-description">Skills: UI/UX Design, Frontend Development</p>
                        </div>
                        <div className="ent-skilled-person-btn-container">
                            <button className="ent-skilled-person-btn">Open Chat</button>
                            <button className="ent-skilled-person-btn">View Details</button>
                        </div>
                    </div>
                    <div className="skilled-person">
                        <img className="skilled-person-img" src={require("./assets/Oval.png")} alt="User Profile" />
                        <div className="ent-skilled-person-about">
                            <p className="ent-skilled-person-name">Alice Johnson</p>
                            <p className="ent-skilled-person-description">Skills: UI/UX Design, Frontend Development</p>
                        </div>
                        <div className="ent-skilled-person-btn-container">
                            <button className="ent-skilled-person-btn">Open Chat</button>
                            <button className="ent-skilled-person-btn">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntrepreneurSearch