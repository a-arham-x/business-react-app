import React from 'react'
import "./assets/entrepreneur.css"

function EntrepreneurDashboard() {
    return (
        <div className="entrepreneur-dashboard">
            <h1 className="edb-heading">Overview</h1>
            <div className="edb-container">
                <div className="edb-sub-container">
                    <div className="edb-amount-container">
                        <h1 className="edb-heading">Total Amount Collected</h1>
                        <p className="edb-text">$2389.00 </p>
                    </div>
                </div>
                <div className="edb-sub-container">
                    <div className="edb-ideas-container">
                        <h1 className="edb-heading">Active Ideas</h1>
                        <p className="edb-text">05</p>
                    </div>
                </div>
            </div>
            <div className="edb-container">
                <div className="edb-sub-container">
                    <div className="edb-contracts-container">
                        <h1 className="edb-heading">Total Contracts</h1>
                        <p className="edb-text">25</p>
                    </div>
                </div>
                <div className="edb-sub-container-x">
                    <h1 className="edb-heading">Recent Ideas</h1>
                    <p className="edb-sm-text">Last 04 orders</p>
                    <br />
                    <br />
                    <h1 className="edb-heading">Project Aurora</h1>
                    <p className="edb-sm-text">Advanced AI research and development for autonomous systems.</p>
                    <h1 className="edb-heading">Project Aurora</h1>
                    <p className="edb-sm-text">Advanced AI research and development for autonomous systems.</p>
                </div>
            </div>
        </div>
    )
}

export default EntrepreneurDashboard