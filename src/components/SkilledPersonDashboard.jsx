import React from 'react'
import "./assets/skilled_person.css"

function SkilledPersonDashboard() {
    return (
        <div className="skilled-person-dashboard">
            <h1 className="sp-dashboard-heading">Overview</h1>
            <div className="gigs-info">
                <div className="gigs-info-left">
                    <h1 className="sp-dashboard-heading">Total Gigs</h1>
                    <h1 className="sp-dashboard-heading">25</h1>
                </div>
                <div className="gigs-info-right">
                    <h1 className="sp-dashboard-heading">Average Impressions</h1>
                    <h1 className="sp-dashboard-heading">+2350</h1>
                    <div className="gigs-text">+180.1% from last month</div>
                </div>
            </div>
            <img src={require("./assets/stock-photo.png")} alt="Stock Photo" className="sp-dashboard-img" />
        </div>
    )
}

export default SkilledPersonDashboard