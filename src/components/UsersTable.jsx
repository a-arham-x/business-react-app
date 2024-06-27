import React from 'react'
import { useLocation } from 'react-router-dom'

function UsersTable() {
    const location = useLocation();
    return (
        <div className="users-table">
            <div className="head-container">
                <h2 className="table-head">Image</h2>
                <h2 className="table-head">Name</h2>
                <h2 className="table-head">Email</h2>
                <h2 className="table-head">Contact</h2>
                {location.pathname !== "/admin/skilled-person" && <h2 className="table-head">Contract With</h2>}
                <h2 className="table-head actions">Actions</h2>
            </div>
            <div className="table-row">
                <img src={require("./assets/Oval.png")} alt="User Profile Pic" className="user-pic" />
                <p className="table-text">John Doe</p>
                <p className="table-text">john@example.com</p>
                <p className="table-text">123-456-7890</p>
                {location.pathname !== "/admin/skilled-person" && <p className="table-text">Haisam</p>}
                {location.pathname !== "/admin/skilled-person" && <button className="table-btn">View Details</button>}
                {location.pathname === "/admin/skilled-person" && <button className="table-btn">View File</button>}
                <img className="edit-icon" src={require("./assets/edit-icon.png")} alt="Edit Icon" />
                <img className="delete-icon" src={require("./assets/delete-icon.png")} alt="Delete Icon" />
            </div>
            <div className="table-row">
                <img src={require("./assets/Oval.png")} alt="User Profile Pic" className="user-pic" />
                <p className="table-text">John Doe</p>
                <p className="table-text">alice@example.com</p>
                <p className="table-text">123-456-7890</p>
                {location.pathname !== "/admin/skilled-person" && <p className="table-text">Sania</p>}
                {location.pathname !== "/admin/skilled-person" && <button className="table-btn">View Details</button>}
                {location.pathname === "/admin/skilled-person" && <button className="table-btn">View File</button>}
                <img className="edit-icon" src={require("./assets/edit-icon.png")} alt="Edit Icon" />
                <img className="delete-icon" src={require("./assets/delete-icon.png")} alt="Delete Icon" />
            </div>
            <div className="table-row">
                <img src={require("./assets/Oval.png")} alt="User Profile Pic" className="user-pic" />
                <p className="table-text">John Doe</p>
                <p className="table-text">alice@example.com</p>
                <p className="table-text">123-456-7890</p>
                {location.pathname !== "/admin/skilled-person" && <p className="table-text">Muzammil</p>}
                {location.pathname !== "/admin/skilled-person" && <button className="table-btn">View Details</button>}
                {location.pathname === "/admin/skilled-person" && <button className="table-btn">View File</button>}
                <img className="edit-icon" src={require("./assets/edit-icon.png")} alt="Edit Icon" />
                <img className="delete-icon" src={require("./assets/delete-icon.png")} alt="Delete Icon" />
            </div>
            <div className="table-row">
                <img src={require("./assets/Oval.png")} alt="User Profile Pic" className="user-pic" />
                <p className="table-text">John Doe</p>
                <p className="table-text">alice@example.com</p>
                <p className="table-text">123-456-7890</p>
                {location.pathname !== "/admin/skilled-person" && <p className="table-text">Saba</p>}
                {location.pathname !== "/admin/skilled-person" && <button className="table-btn">View Details</button>}
                {location.pathname === "/admin/skilled-person" && <button className="table-btn">View File</button>}
                <img className="edit-icon" src={require("./assets/edit-icon.png")} alt="Edit Icon" />
                <img className="delete-icon" src={require("./assets/delete-icon.png")} alt="Delete Icon" />
            </div>
            <div className="table-row last">
                <img src={require("./assets/Oval.png")} alt="User Profile Pic" className="user-pic" />
                <p className="table-text">John Doe</p>
                <p className="table-text">alice@example.com</p>
                <p className="table-text">123-456-7890</p>
                {location.pathname !== "/admin/skilled-person" && <p className="table-text">Sadaf</p>}
                {location.pathname !== "/admin/skilled-person" && <button className="table-btn">View Details</button>}
                {location.pathname === "/admin/skilled-person" && <button className="table-btn">View File</button>}
                <img className="edit-icon" src={require("./assets/edit-icon.png")} alt="Edit Icon" />
                <img className="delete-icon" src={require("./assets/delete-icon.png")} alt="Delete Icon" />
            </div>
        </div >
    )
}

export default UsersTable