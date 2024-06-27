import React from 'react'
import "./assets/entrepreneur.css"

function EntrepreneurHiring() {
    return (
        <div className="entrepreneur-hirinng">
            <h1 className="hiring-heading">Find&nbsp;skilled&nbsp;individuals&nbsp;for&nbsp;your&nbsp;project</h1>
            <p className="hiring-text">Enter&nbsp;the&nbsp;skills&nbsp;you're&nbsp;looking&nbsp;for&nbsp;and&nbsp;contact&nbsp;the&nbsp;best&nbsp;candidates.</p>
            <input type="text" className="search-input ent-input" name="search" id="search" placeholder="Search Contract" />
            <button className="search-button">Enter Skills</button>
            <div className="hiring-chat">
                <div className="hiring-chat-left">
                    <h1 className="hiring-chat-skill">Web Developer</h1>
                    <p className="hiring-chat-text">I am looking for a web developer to help me build a personal website.</p>
                </div>
                <button className="hiring-chat-btn">Open Chat</button>
            </div>
            <div className="hiring-chat">
                <div className="hiring-chat-left">
                    <h1 className="hiring-chat-skill">Graphic Designer</h1>
                    <p className="hiring-chat-text">I need a graphic designer to create a logo for my new startup.</p>
                </div>
                <button className="hiring-chat-btn">Open Chat</button>
            </div>
            <div className="hiring-chat">
                <div className="hiring-chat-left">
                    <h1 className="hiring-chat-skill">Content Writer</h1>
                    <p className="hiring-chat-text">Looking for a skilled content writer to create engaging blog posts.</p>
                </div>
                <button className="hiring-chat-btn">Open Chat</button>
            </div>
            <div className="hiring-chat">
                <div className="hiring-chat-left">
                    <h1 className="hiring-chat-skill">Web Developer</h1>
                    <p className="hiring-chat-text">I am looking for a web developer to help me build a personal website.</p>
                </div>
                <button className="hiring-chat-btn">Open Chat</button>
            </div>
        </div>
    )
}

export default EntrepreneurHiring