import React from 'react'
import "./assets/navbar.css"
import { useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();
    return (
        <nav className="user-nav">
            <div className="nav-container">
                <div className="main-container">
                    <div className="container-1">
                        <img src={require("./assets/logo 6.png")} alt="logo" />
                        <img src={require("./assets/nav-image-1.png")} alt="logo" />
                    </div>
                    {location.pathname.slice(0, 9) === "/investor" && <div className="user-page-info">
                        <div className="user-type-container">
                            <img style={{ marginLeft: "-20px" }} src={require("./assets/analytics.png")} alt="Analytics Icon" />
                            <h2 className="user-type">Investor</h2>
                        </div>
                    </div>}
                    {location.pathname.slice(0, 13) === "/entrepreneur" && <div className="user-page-info">
                        <div className="user-type-container">
                            <img style={{ marginLeft: "-60px" }} src={require("./assets/EntGroup 6.png")} alt="Entrepreneur Icon" />
                            <h2 className="user-type" >Entrepreneur</h2>
                        </div>
                    </div>}
                    {location.pathname.slice(0, 15) === "/skilled-person" && <div className="user-page-info">
                        <div className="user-type-container">
                            <img src={require("./assets/idea-icon.png")} alt="Idea Icon" />
                            <h2 className="user-type">Skilled&nbsp;Person</h2>
                        </div>
                    </div>}
                    {location.pathname.slice(0, 6) === "/admin" && <div className="user-page-info">
                        <div className="user-type-container">
                            <img src={require("./assets/financial-analytics.png")} alt="Financial Analytics" />
                            <h2 className="user-type">Admin</h2>
                        </div>
                    </div>}
                </div>
                <div className="lower-container">
                    {location.pathname === "/investor/profile" && <h2 style={{ marginLeft: "270px" }} className="page-type">Profile</h2>}
                    {location.pathname === "/investor/ideas" && <h2 style={{ marginLeft: "230px" }} className="page-type">Ideas</h2>}
                    {location.pathname === "/investor/viewdetails" && <h2 className="page-type">View&nbsp;Details</h2>}
                    {location.pathname === "/investor/makecontract" && <h2 className="page-type">Make&nbsp;Contract</h2>}
                    {location.pathname === "/investor/portfolio" && <h2 className="page-type">Portfolio</h2>}
                    {location.pathname === "/investor/contract" && <h2 className="page-type">Contract</h2>}
                    {location.pathname === "/investor/tracking" && <h2 className="page-type">Tracking</h2>}
                    {location.pathname === "/entrepreneur/dashboard" && <h2 className="page-type">Dashboard</h2>}
                    {location.pathname === "/entrepreneur/ideas" && <h2 className="page-type">My&nbsp;Ideas</h2>}
                    {location.pathname === "/entrepreneur/edit" && <h2 className="page-type">Edit</h2>}
                    {location.pathname === "/entrepreneur/newidea" && <h2 className="page-type">Add&nbsp;New&nbsp;Idea</h2>}
                    {location.pathname === "/entrepreneur/portfolio" && <h2 className="page-type">Portfolio</h2>}
                    {location.pathname === "/entrepreneur/contract" && <h2 className="page-type">Contract</h2>}
                    {location.pathname === "/entrepreneur/hiring" && <h2 className="page-type">Skill&nbsp;Hiring</h2>}
                    {location.pathname === "/entrepreneur/search" && <h2 className="page-type">Search</h2>}
                    {location.pathname === "/entrepreneur/tracking" && <h2 className="page-type">Tracking</h2>}
                    {location.pathname === "/skilled-person/dashboard" && <h2 className="page-type" style={{ marginLeft: "-200px" }}>Dashboard</h2>}
                    {location.pathname === "/skilled-person/gigs" && <h2 className="page-type">My Gigs</h2>}
                    {location.pathname === "/skilled-person/uploadgigs" && <h2 className="page-type">Upload&nbsp;Gigs</h2>}
                    {location.pathname === "/admin/dashboard" && <h2 className="page-type">Dashboard</h2>}
                    {location.pathname === "/admin/investor" && <h2 className="page-type">Investor</h2>}
                    {location.pathname === "/admin/entrepreneur" && <h2 className="page-type">Entrepreneur</h2>}
                    {location.pathname === "/admin/skilled-person" && <h2 className="page-type">Skilled&nbsp;Person</h2>}
                    {location.pathname === "/admin/ideas" && <h2 className="page-type">Manage&nbsp;Ideas</h2>}
                    {location.pathname === "/admin/contract" && <h2 className="page-type">Manage&nbsp;Contract</h2>}
                    <div className="contact-div">
                        <div className="message-div">
                            <img className="message-img" src={require("./assets/message.png")} alt="Message Icon" />
                            <p className="nav-p">Message</p>
                        </div>
                        <div className="message-div">
                            <img className="message-img" src={require("./assets/Bell_fill.png")} alt="Bell Icon" />
                            <p className="nav-p">Notifictaion</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar