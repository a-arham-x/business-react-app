import React from 'react'
import "./assets/admin.css"

function AdminManageIdeas() {
    return (
        <div className='admin-ideas'>
            <h1 className="ideas-head">Review and Manage Ideas</h1>
            <p className="ideas-text">Review and manage ideas submitted by entrepreneurs</p>
            <div className="search-ideas">
                <img src={require("./assets/search-icon.png")} alt="Search Icon" className="search-icon" />
                <input type="text" className="search-ideas-input" name="search" id="search" placeholder="Search Ideas" />
                <div className="total-ideas-container">
                    <p className="large">Total Ideas</p>
                    <p className="small">23 ideas</p>
                </div>
                <button className="export-btn">Export</button>
            </div>
            <div className="users-table ideas-table">
                <div className="head-container">
                    <h2 className="table-head">Idea</h2>
                    <h2 className="table-head desc-col">Description</h2>
                    <h2 className="table-head ent-col">Entrepreneur</h2>
                    <h2 className="table-head">Actions</h2>
                </div>
                <div className="table-row">
                    <p className="itable-text">Social Media Analytics Platform</p>
                    <p className="table-text-sm">A platform that provides in-depth analytics for
                        social media accounts, including sentiment analysis,
                        follower growth predictions,
                        and optimal posting times.</p>
                    <button className="itable-btn">View File</button>
                    <p className="table-text">Sarah Johnson</p>
                    <img className="tick-img" src={require("./assets/tick.png")} alt="Tick" />
                    <img className="cross-img" src={require("./assets/cross.png")} alt="Cross" />
                </div>
                <div className="table-row">
                    <p className="itable-text">Eco-Friendly Packaging Innovation</p>
                    <p className="table-text-sm">An innovative biodegradable packaging solution that
                        replaces single-use plastics. The packaging is made
                        from plant-based materials and is both cost-effective and
                        durable.</p>
                    <button className="itable-btn">View File</button>
                    <p className="table-text">Alex Patel</p>
                    <img className="tick-img" src={require("./assets/tick.png")} alt="Tick" />
                    <img className="cross-img" src={require("./assets/cross.png")} alt="Cross" />
                </div>
                <div className="table-row">
                    <p className="itable-text">Social Media Analytics Platform</p>
                    <p className="table-text-sm">A platform that provides in-depth analytics for
                        social media accounts, including sentiment analysis,
                        follower growth predictions,
                        and optimal posting times.</p>
                    <button className="itable-btn">View File</button>
                    <p className="table-text">Sarah Johnson</p>
                    <img className="tick-img" src={require("./assets/tick.png")} alt="Tick" />
                    <img className="cross-img" src={require("./assets/cross.png")} alt="Cross" />
                </div>
                <div className="table-row">
                    <p className="itable-text">Social Media Analytics Platform</p>
                    <p className="table-text-sm">A platform that provides in-depth analytics for
                        social media accounts, including sentiment analysis,
                        follower growth predictions,
                        and optimal posting times.</p>
                    <button className="itable-btn">View File</button>
                    <p className="table-text">Sarah Johnson</p>
                    <img className="tick-img" src={require("./assets/tick.png")} alt="Tick" />
                    <img className="cross-img" src={require("./assets/cross.png")} alt="Cross" />
                </div>
                <div className="table-row last">
                    <p className="itable-text">Social Media Analytics Platform</p>
                    <p className="table-text-sm">A platform that provides in-depth analytics for
                        social media accounts, including sentiment analysis,
                        follower growth predictions,
                        and optimal posting times.</p>
                    <button className="itable-btn">View File</button>
                    <p className="table-text">Sarah Johnson</p>
                    <img className="tick-img" src={require("./assets/tick.png")} alt="Tick" />
                    <img className="cross-img" src={require("./assets/cross.png")} alt="Cross" />
                </div>
            </div >
        </div>
    )
}

export default AdminManageIdeas