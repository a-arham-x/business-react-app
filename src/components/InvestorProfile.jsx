import React from 'react'

function InvestorProfile() {
    return (
        <div className="investor-profile">
            <div className="ip-about">
                <div className="ip-about-head">
                    <img className="ip-ab-image" src={require("./assets/Oval.png")} alt="Profile image" />
                    <div className="ip-ab-info">
                        <h3 className="ip-ab-name">John&nbsp;Doe</h3>
                        <button className="ip-ab-button">Investor</button>
                    </div>
                    <img className="ip-ab-icon" src={require("./assets/edit-06.png")} alt="Edit Icon" />
                </div>
                <div className="ip-group">
                    <img className="ip-group-img" src={require("./assets/icon-mail.png")} alt="Mail Icon" />
                    <p className="ip-group-text">example@gmail.com</p>
                </div>
                <div className="ip-group">
                    <img className="ip-group-img" src={require("./assets/Phone_fill.png")} alt="Mail Icon" />
                    <p className="ip-group-text">+92 ----------</p>
                </div>
                <div className="ip-group">
                    <img className="ip-group-img" src={require("./assets/Subtract.png")} alt="Mail Icon" />
                    <p className="ip-group-text">Address</p>
                </div>
                <h3 className="ip-about-text-head">About Me</h3>
                <p className="ip-about-text">Serial entrepreneur turned investor. Passionate about disruptive technologies and innovative business models.</p>
                <h3 className="ip-about-text-head">Skills & Expertise</h3>
                <p className="ip-about-text">Business Strategy, Venture Capital, Startups, Innovation, Leadership</p>
            </div>
            <div className="previous-investments">
                <h1 className="previous-investments-head">Previous Investments</h1>
                <hr className="pi-separator" />
                <div className="pi-container">
                    <div className="pi-sub-container">
                        <h4 className="pisc-head">Acme Inc</h4>
                        <p className="pisc-text">Widget Manufactyring</p>
                    </div>
                    <button className="pisc-btn">View</button>
                </div>
                <hr className="pi-separator" />
                <div className="pi-container">
                    <div className="pi-sub-container">
                        <h4 className="pisc-head">Example Corp</h4>
                        <p className="pisc-text">Digital transformation services</p>
                    </div>
                    <button className="pisc-btn">View</button>
                </div>
            </div>
        </div>
    )
}

export default InvestorProfile