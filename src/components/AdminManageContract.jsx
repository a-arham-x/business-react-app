import React from 'react'

function AdminManageContract() {
    return (
        <div className="manage-contract">
            <div className="top-container">
                <h1 className="contract-heading">Contracts</h1>
                <div className="search-div">
                    <img src={require("./assets/search-icon.png")} alt="Search Icon" className="search-icon manage-contract-icon" />
                    <input type="text" className="search-ideas-input manag-contract-search" name="search" id="search" placeholder="Search Ideas" />
                </div>
            </div>
            <div className="users-table contract-table">
                <div className="head-container">
                    <h2 className="table-head">Contract ID</h2>
                    <h2 className="table-head">Investor</h2>
                    <h2 className="table-head">Entrepreneur</h2>
                    <h2 className="table-head">Status</h2>
                    <h2 className="table-head">Date Created</h2>
                    <h2 className="table-head actions">Actions</h2>
                </div>
                <div className="table-row">
                    <p className="table-text">123456</p>
                    <p className="table-text">John Doe</p>
                    <p className="table-text">Jane Smith</p>
                    <p className="table-text">Pending</p>
                    <p className="table-text date-text">2023-09-15 10:24 AM</p>
                    <button className="table-btn">View Contract</button>
                    <img className="open-icon" src={require("./assets/open-new.png")} alt="Open Icon" />
                    <img className="delete-icon" src={require("./assets/delete-icon.png")} alt="Delete Icon" />
                </div>
                <div className="table-row">
                    <p className="table-text">123456</p>
                    <p className="table-text">John Doe</p>
                    <p className="table-text">Jane Smith</p>
                    <p className="table-text">Pending</p>
                    <p className="table-text date-text">2023-09-15 10:24 AM</p>
                    <button className="table-btn">View Contract</button>
                    <img className="open-icon" src={require("./assets/open-new.png")} alt="Open Icon" />
                    <img className="delete-icon" src={require("./assets/delete-icon.png")} alt="Delete Icon" />
                </div>
                <div className="table-row">
                    <p className="table-text">123456</p>
                    <p className="table-text">John Doe</p>
                    <p className="table-text">Jane Smith</p>
                    <p className="table-text">Pending</p>
                    <p className="table-text date-text">2023-09-15 10:24 AM</p>
                    <button className="table-btn">View Contract</button>
                    <img className="open-icon" src={require("./assets/open-new.png")} alt="Open Icon" />
                    <img className="delete-icon" src={require("./assets/delete-icon.png")} alt="Delete Icon" />
                </div>
                <div className="table-row">
                    <p className="table-text">123456</p>
                    <p className="table-text">John Doe</p>
                    <p className="table-text">Jane Smith</p>
                    <p className="table-text">Pending</p>
                    <p className="table-text date-text">2023-09-15 10:24 AM</p>
                    <button className="table-btn">View Contract</button>
                    <img className="open-icon" src={require("./assets/open-new.png")} alt="Open Icon" />
                    <img className="delete-icon" src={require("./assets/delete-icon.png")} alt="Delete Icon" />
                </div>
                <div className="table-row last">
                    <p className="table-text">123456</p>
                    <p className="table-text">John Doe</p>
                    <p className="table-text">Jane Smith</p>
                    <p className="table-text">Pending</p>
                    <p className="table-text date-text">2023-09-15 10:24 AM</p>
                    <button className="table-btn">View Contract</button>
                    <img className="open-icon" src={require("./assets/open-new.png")} alt="Open Icon" />
                    <img className="delete-icon" src={require("./assets/delete-icon.png")} alt="Delete Icon" />
                </div>
            </div >
        </div>
    )
}

export default AdminManageContract