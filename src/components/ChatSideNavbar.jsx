import React from 'react'
import "./assets/chatsidenav.css"
// import "./assets/sidenavbar.css"

function ChatSideNavbar() {
    return (
        <div className="chat-sidenav">
            <div className="sidenav-top">
                <img className="sidenav-oval" src={require("./assets/Oval.png")} alt="" />
                <div className="text-div">
                    <p className="highlighted">Name</p>
                    <p className="small-email">Email</p>
                </div>
                <img className="bell-icon" src={require("./assets/ph_bell.png")} alt="Bell Icon" />
            </div>
            <p className="messages-head">Messages</p>
            <div className="search-div">
                <img src={require("./assets/search-icon.png")} alt="" />
                <input type="text" className="chat-search" placeholder='Search Chats' />
            </div>
            <div className="past-chats">
                <div className="previous-chat">
                    <img className="sidenav-oval" src={require("./assets/Oval.png")} alt="" />
                    <div className="name-and-text">
                        <p className="name-text">Sulatana</p>
                        <p className="message-text">Helloooo.. How are you</p>
                    </div>
                    <div className="time-and-number">
                        <p className="time-text">5s</p>
                        <p className="number-text">1</p>
                    </div>
                </div>
                <div className="previous-chat">
                    <img className="sidenav-oval" src={require("./assets/Oval.png")} alt="" />
                    <div className="name-and-text">
                        <p className="name-text">Fatima</p>
                        <p className="message-text">When will the work be ready???</p>
                    </div>
                    <div className="time-and-number">
                        <p className="time-text">5m</p>
                        <p className="number-text">4</p>
                    </div>
                </div>
                <div className="previous-chat">
                    <img className="sidenav-oval" src={require("./assets/Oval.png")} alt="" />
                    <div className="name-and-text">
                        <p className="name-text">Meera</p>
                        <p className="message-text">Awesome! I love chocolate chip
                            cookie dough. Looking forward....
                        </p>
                    </div>
                    <div className="time-and-number">
                        <p className="time-text">1h</p>
                        <img src={require("./assets/tick-double.png")} alt="" />
                    </div>
                </div>
                <div className="previous-chat">
                    <img className="sidenav-oval" src={require("./assets/Oval.png")} alt="" />
                    <div className="name-and-text">
                        <p className="name-text">Ranbir</p>
                        <p className="message-text">Lets go for hicking</p>
                    </div>
                    <div className="time-and-number">
                        <p className="time-text">2h</p>
                        <img src={require("./assets/tick-double.png")} alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ChatSideNavbar