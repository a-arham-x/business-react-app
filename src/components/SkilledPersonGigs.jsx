import React from 'react'
import "./assets/entrepreneur.css"
import "./assets/skilled_person.css"

function SkilledPersonGigs() {
    return (
        <div className="skilled-person-gigs">
            <div className="sp-gigs-head">
                <h1 className="gigs-head">My&nbsp;Gigs</h1>
                <button className="hiring-chat-btn add-gig">Add Gig</button>
            </div>
            <div className="hiring-chat">
                <div className="hiring-chat-left">
                    <h1 className="hiring-chat-skill">Web Developer</h1>
                    <p className="hiring-chat-text">I am looking for a web developer to help me build a personal website.</p>
                </div>
                <button className="hiring-chat-btn">Edit</button>
            </div>
            <div className="hiring-chat">
                <div className="hiring-chat-left">
                    <h1 className="hiring-chat-skill">Graphic Designer</h1>
                    <p className="hiring-chat-text">I need a graphic designer to create a logo for my new startup.</p>
                </div>
                <button className="hiring-chat-btn">Edit</button>
            </div>
            <div className="hiring-chat">
                <div className="hiring-chat-left">
                    <h1 className="hiring-chat-skill">Content Writer</h1>
                    <p className="hiring-chat-text">Looking for a skilled content writer to create engaging blog posts.</p>
                </div>
                <button className="hiring-chat-btn">Edit</button>
            </div>
            <div className="hiring-chat">
                <div className="hiring-chat-left">
                    <h1 className="hiring-chat-skill">Web Developer</h1>
                    <p className="hiring-chat-text">I am looking for a web developer to help me build a personal website.</p>
                </div>
                <button className="hiring-chat-btn">Edit</button>
            </div>
        </div>
    )
}

export default SkilledPersonGigs