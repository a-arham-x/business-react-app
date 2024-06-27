import React from 'react'
import "./assets/chat.css"

function ChatNavbar() {
    return (
        <nav>
            <div className="container-pics">
                <img src={require("./assets/logo 6.png")} alt="logo" />
                <img src={require("./assets/nav-image-1.png")} alt="logo" />
            </div>
            <img className="user-profile-pic" src={require("./assets/Oval.png")} alt="User Profile" />
            <p className="nav-text">Meera</p>
            <img className="chat-nav-icon" src={require("./assets/call-icon.png")} alt="" />
            <img className="chat-nav-icon" src={require("./assets/video-icon.png")} alt="" />
            <img className="chat-nav-icon" src={require("./assets/menu-icon.png")} alt="" />
        </nav>
    )
}

export default ChatNavbar