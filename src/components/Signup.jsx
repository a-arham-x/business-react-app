import React from 'react'

function Signup() {
    return (
        <>
            <div className="login-page-container">
                <h1 className="auth-heading">BECOME AN EXCLUSIVE MEMBER</h1>
                <p className="login-text">SIGN UP and join the partnership</p>
                <div className="form-container">
                    <h1 className="login-heading">Sign Up</h1>
                    <form action="" className="form-class">
                        <div className="input-group">
                            <div className="input-container">
                                <img className="input-img" src={require("./assets/icon-user.png")} alt="person icon" />
                                <input className="input-field" type="text" placeholder="Name" name="name" />
                            </div>
                            <div className="input-container">
                                <img className="input-img" src={require("./assets/Group_add_fill.png")} alt="gender icon" />
                                <input className="input-field" type="text" placeholder="Gender" name="gender" />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="input-container">
                                <img className="input-img" src={require("./assets/icon-mail.png")} alt="mail icon" />
                                <input className="input-field" type="email" placeholder="example@email.com" name="email" />
                            </div>
                            <div className="input-container">
                                <img className="input-img" src={require("./assets/Subtract.png")} alt="address icon" width="20" />
                                <input className="input-field" type="text" placeholder="Address" name="address" />
                            </div>
                        </div>
                        <div className="input-group-2">
                            <div className="other-inputs">
                                <div className="input-container">
                                    <img className="input-img" src={require("./assets/lock.png")} alt="mail icon" />
                                    <input className="input-field" type="password" placeholder="***********" name="password" />
                                </div>
                                <div className="input-container">
                                    <img className="input-img" src={require("./assets/Group 6.png")} alt="inevstor icon" />
                                    <select className="input-field" type="password" placeholder="***********" name="password" >
                                        <option value="investor">Investor</option>
                                        <option value="entrepreneur">Entrepreneur</option>
                                        <option value="skilled-person">Skilled Person</option>
                                    </select>
                                </div>
                                <div className="input-container">
                                    <img className="input-img" src={require("./assets/Phone_fill.png")} alt="phone icon" />
                                    <input className="input-field" type="text" placeholder="+92 ----------" name="phone" />
                                </div>
                                <div className="input-container">
                                    <img className="input-img" src={require("./assets/Date_range_fill.png")} alt="date icon" />
                                    <input className="input-field" type="text" placeholder="YY/MM/DD" name="phone" />
                                </div>
                            </div>
                            <div className="textarea-container">
                                <textarea name="about-yourself" id="about-yourself" placeholder='About Yourself'></textarea>
                            </div>
                        </div>
                        <div className="auth-buttons-group">
                            <div className="auth-button">Log In <img className="arrow-img" src={require("./assets/arrow-right.png")} alt="arrow" /></div>
                            <div className="auth-button">Sign Up <img className="arrow-img" src={require("./assets/arrow-right.png")} alt="arrow" /></div>
                        </div>
                    </form >
                </div >
            </div >
        </>
    )
}

export default Signup