import React from 'react'
import "./assets/skilled_person.css";
import "./assets/admin.css"
import ProgressBar from 'react-progressbar';


function AdminDashboard() {
    return (
        <div className='admin-dashboard'>
            <h1 className="sp-dashboard-heading">Overview</h1>
            <p className="gigs-info">
                <div className="gigs-info-right box">
                    <h1 className="sp-dashboard-heading">Active Collaborations</h1>
                    <h1 className="sp-dashboard-heading">+23</h1>
                    <p className="gigs-text">+10 since last week</p>
                </div>
                <div className="gigs-info-right box">
                    <h1 className="sp-dashboard-heading">Pending Requests</h1>
                    <h1 className="sp-dashboard-heading">+5</h1>
                    <p className="gigs-text">+2 since yesterday</p>
                </div>
            </p>
            <div className="projects-box">
                <h1 className="sp-dashboard-heading">Ongoing Projects</h1>
                <div className="projects-progress-container">
                    <h1 className="sp-dashboard-heading">Project X</h1>
                    <p className="gigs-text">25% complete</p>
                    <ProgressBar className="project-progress" color="#23235E" completed={25} />
                    <h1 className="sp-dashboard-heading">Project Y</h1>
                    <p className="gigs-text">50% complete</p>
                    <ProgressBar className="project-progress" color="#23235E" completed={50} />
                    <h1 className="sp-dashboard-heading">Project Z</h1>
                    <p className="gigs-text">10% complete</p>
                    <ProgressBar className="project-progress" color="#23235E" completed={10} />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard