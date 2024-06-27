import React from 'react'

function InvestorDetails() {
    return (
        <div className="investor-details">
            <div className="investor-details-container">
                <h1 className="id-heading">Real-time Collaboration for remote teams</h1>
                <p className="id-text">Idea by</p>
                <div className="id-row">
                    <img className="id-row-img" src={require("./assets/Oval.png")} alt="User Profile Pic" />
                    <div className="sub-id-row">
                        <h3 className="sir-head">Sarah Day</h3>
                        <p className="sir-text">CEO at Acme Inc. | 5 projects</p>
                    </div>
                </div>
                <p className="id-details">Remote work is the new normal, but
                    it can be challenging for teams to collaborate
                    effectively when they're not in the same location.
                    That's where our platform comes in. We offer a real-time
                    collaboration tool that makes it easy for remote
                    teams to work together as if they're in the same room.</p>
                <h1 className="id-heading">Required Amount</h1>
                <p className="id-amount">$5000.00</p>
            </div>
            <div className="investor-details-container">
                <h4 className="id-contact">Contact Sarah Day</h4>
                <p className="id-contact-text">Have a question about Sarah's idea? Want to
                    collaborate on a project? Enter your message
                    below.</p>
                <button className="open-chat-btn">Open Chat</button>
            </div>
        </div>
    )
}

export default InvestorDetails