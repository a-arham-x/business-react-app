import React from 'react'
import ChatNavbar from './ChatNavbar'
import ChatSideNavbar from './ChatSideNavbar'

function Chat() {
    return (
        <div>
            <ChatNavbar />
            <div className="chat-row">
                <ChatSideNavbar />
                <div className="chat-area">
                    <div className="day-text">TODAY</div>
                    <p className="received-text">
                        Hey! Don't forget our pizza night at
                        your place this Saturday. I'm
                        bringing my famous veggie
                        pizza..."
                        <p className="text-time">3:17 PM</p>
                    </p>
                    <p className="sent-text">
                        Sounds delicious, Meera! Can't wait for
                        Saturday! By the way, do you think we
                        should get some ice cream for dessert?"
                    </p>
                    <p className="text-time">3:25&nbsp;PM</p>
                    <p className="received-text">
                        Absolutely! I'm all in for ice cream.
                        I'll bring my favorite flavors. What's
                        your preference?
                        <p className="text-time">3:37 PM</p>
                    </p>
                    <p className="sent-text">
                        Awesome! I love chocolate chip cookie
                        dough. Looking forward to pizza party on
                        friday!!
                    </p>
                    <p className="text-time">3:28&nbsp;PM</p>
                    <div className="text-bar">
                        <img src={require("./assets/tdesign_attach.png")} alt="Attach Icon" />
                        <p className="type-text">Type a message</p>
                        <img src={require("./assets/Vector.png")} id="smiley" alt="Smiley Face" />
                        <img src={require("./assets/mdi_send-circle.png")} id="send-icon" alt="Send Icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat