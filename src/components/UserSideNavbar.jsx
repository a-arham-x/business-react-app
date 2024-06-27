import React from 'react'
import "./assets/sidenavbar.css";
import { useLocation } from 'react-router-dom';

function UserSideNavbar() {
    const location = useLocation();
    let style = {};
    if (location.pathname.slice(0, 6) === "/admin") {
        style = { width: "350px" }
    }
    if (location.pathname === "/investor/makecontract") {
        style = { height: "115vh" }
    }
    if (location.pathname === "/investor/contract") {
        style = { height: "120vh" }
    }
    if (location.pathname === "/investor/profile") {
        style = { height: "120vh" }
    }
    if (location.pathname === "/investor/ideas") {
        style = { height: "115vh" }
    }
    if (location.pathname === "/entrepreneur/dashboard") {
        style = { height: "120vh" }
    }
    if (location.pathname === "/entrepreneur/newidea") {
        style = { height: "110vh" }
    }
    if (location.pathname === "/entrepreneur/hiring") {
        style = { height: "105vh" }
    }
    if (location.pathname === "/entrepreneur/portfolio") {
        style = { height: "125vh" }
    }
    if (location.pathname === "/entrepreneur/contract") {
        style = { height: "120vh" }
    }
    if (location.pathname === "/skilled-person/dashboard") {
        style = { height: "115vh" }
    }
    if (location.pathname === "/admin/contract") {
        style = { width: "350px", height: "131vh" }
    }
    if (location.pathname === "/admin/ideas") {
        style = { width: "350px", height: "137vh" }
    }
    if (location.pathname === "/admin/dashboard") {
        style = { width: "350px", height: "110vh" }
    }
    return (
        <nav className="user-sidenav" style={style}>
            <img className='oval-image' src={require("./assets/Oval.png")} alt="user profile image" />
            <div className="user-name">Name</div>
            {location.pathname.slice(0, 9) === "/investor" && <div className="user-link-container">
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/lamp 3.png")} alt="Profile" />
                    <a className="user-link" href="/investor/profile">Profile</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/lamp 1.png")} alt="Bulb" />
                    <a className="user-link" href="/investor/ideas">Ideas</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/lamp 2.png")} alt="An Image" />
                    <a className="user-link" href="/investor/portfolio">Portfolio</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/partnership 2.png")} alt="Partnership" />
                    <a className="user-link" href="/investor/contract">Contract</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/Group.png")} alt="Log Out" />
                    <a className="user-link" href="/auth/login">Log Out</a>
                </div>
            </div>}
            {location.pathname.slice(0, 13) === "/entrepreneur" && <div className="user-link-container">
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/Chart.png")} alt="Chart" />
                    <a className="user-link" href="/entrepreneur/dashboard">Dashboard</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/lamp 1.png")} alt="Lamp Image" />
                    <a className="user-link" href="/entrepreneur/ideas">My Ideas</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/lamp 2.png")} alt="An Image" />
                    <a className="user-link" href="/entrepreneur/portfolio">Portfolio</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/lamp 7.png")} alt="Hiring Image" />
                    <a className="user-link" href="/entrepreneur/hiring">Skill&nbsp;Hiring</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/partnership 2.png")} alt="Partnership" />
                    <a className="user-link" href="/entrepreneur/contract">Contract</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/Group.png")} alt="Log Out" />
                    <a className="user-link" href="/auth/login">Log Out</a>
                </div>
            </div>}
            {location.pathname.slice(0, 15) === "/skilled-person" && <div className="user-link-container">
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/Chart.png")} alt="Chart" />
                    <a className="user-link" href="/skilled-person/dashboard">Dashboard</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/folder 1.png")} alt="Folder" />
                    <a className="user-link" href="/skilled-person/gigs">My Gigs</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/cloud-computing 1.png")} alt="" />
                    <a className="user-link" href="/skilled-person/uploadgigs">Upload&nbsp;Gigs</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/Group.png")} alt="" />
                    <a className="user-link" href="/auth/login">Log Out</a>
                </div>
            </div>}
            {location.pathname.slice(0, 6) === "/admin" && <div className="user-link-container">
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/Chart.png")} alt="Chart" />
                    <a className="user-link" href="/admin/dashboard">Dashboard</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/analytics.png")} alt="Analytics" />
                    <a className="user-link" href="/admin/investor">Investors</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/EntGroup 6.png")} alt="Entrepreneur" />
                    <a className="user-link" href="/admin/investor">Entrepreneur</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/idea-icon.png")} alt="Idea Icon" />
                    <a className="user-link" href="/admin/skilled-person">Skilled&nbsp;Person</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/manage-ideas.png")} alt="Manage Ideas" />
                    <a className="user-link" href="/admin/ideas">Manage&nbsp;Ideas</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/manage-contract.png")} alt="Manage Contract" />
                    <a className="user-link" href="/admin/contract">Manage&nbsp;Contract</a>
                </div>
                <div className="link-group">
                    <img className="user-link-img" src={require("./assets/Group.png")} alt="Log Out" />
                    <a className="user-link" href="/auth/login">Log Out</a>
                </div>
            </div>}
        </nav>
    )
}

export default UserSideNavbar
