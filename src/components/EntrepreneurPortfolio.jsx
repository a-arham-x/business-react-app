import React from 'react'
import "./assets/entrepreneur.css"
import ProgressBar from 'react-progressbar';

function EntrepreneurPortfolio() {
    return (
        <div className="entrepreneur-portfolio">
            <div className="ep-top-container">
                <div id="ep-top-container-left">
                    <h1 className="ep-name-head">RICK TANG</h1>
                    <p className="ep-skill">Product Designer</p>
                </div>
                <div id="ep-top-container-right">
                    <img src={require("./assets/avatar.png")} alt="Profile Image" className="portfolio-img" />
                </div>
            </div>
            <hr className="ep-separator" />
            <div className="ep-container">
                <div className="ep-container-left">
                    <h2 className="ep-head-2">Details</h2>
                    <h3 className="ep-head-3">Address</h3>
                    <p className="ep-text">San Francisco, California</p>
                    <h3 className="ep-head-3">Phone</h3>
                    <p className="ep-text">(315) 802-8179</p>
                    <h3 className="ep-head-3">Email</h3>
                    <p className="ep-text">ricktang@gmail.com</p>
                    <h3 className="ep-head-3">Links</h3>
                    <ul className="ep-list">
                        <li className="ep-list-item">Linkedin</li>
                        <li className="ep-list-item">Dribble</li>
                        <li className="ep-list-item">Behance</li>
                    </ul>
                    <h3 className="ep-head-3">Skills</h3>
                    <p className="ep-text skill-text">Figma</p>
                    <progress className="skill-level" id="figma-level" value="95" max="100"></progress>
                    <p className="ep-text skill-text">Sketch</p>
                    <progress className="skill-level" id="sketch-level" value="95" max="100"></progress>
                    <p className="ep-text skill-text">Adobe Photoshop</p>
                    <progress className="skill-level" id="photoshop-level" value="70" max="100"></progress>
                    <p className="ep-text skill-text">Adobe Illustrator</p>
                    <progress className="skill-level" id="illustrator-level" value="50" max="100"></progress>
                    <p className="ep-text skill-text">Principle</p>
                    <progress className="skill-level" id="principle-level" value="60" max="100"></progress>
                    <p className="ep-text skill-text">Adobe XD</p>
                    <progress className="skill-level" id="xd-level" value="60" max="100"></progress>
                </div>
                <div className="vl"></div>
                <div className="ep-container-right">
                    <h2 className="ep-head-2">Profile</h2>
                    <p className="ep-text-sm">I'm a product designer focused on ensuring great user experience
                        and meeting business needs of designed products. I’m also experienced in
                        implementing marketing strategies and developing both on and offline campaigns.
                        My philosophy is to make products understandable, useful and long-lasting at the
                        same time recognizing they're never finished and constantly changing. I'm always
                        excited to face new challenges and problems.</p>
                    <h2 className="ep-head-2">Experience</h2>
                    <div className="ep-experience">
                        <h4 className="ep-head-4">Uber</h4>
                        <p className="job-position">Product Designer</p>
                        <p className="job-duration">Mar 2015 - Present</p>
                        <ul className="job-roles">
                            <li className="job-role">Designed safety-focused experiences for Riders and Drivers </li>
                            <li className="job-role">Physical space problem solving and it s interaction with the digital Navigated organization to achieve operational improvements</li>
                            <li className="job-role">Physical space problem solving and it s interaction with the digital Navigated organization to achieve operational improvements</li>
                        </ul>
                    </div>
                    <div className="ep-experience">
                        <h4 className="ep-head-4">IFTTT</h4>
                        <p className="job-position">Product Designer</p>
                        <p className="job-duration">Dec 2013 - Mar 2015</p>
                        <ul className="job-roles">
                            <li className="job-role">Product and system design for a complex product</li>
                            <li className="job-role">Designed both consumer and developer products for IFTTT</li>
                            <li className="job-role">Responsible for maintaining design across iOS, Android, and web</li>
                        </ul>
                    </div>
                    <div className="ep-experience">
                        <h4 className="ep-head-4">Facebook</h4>
                        <p className="job-position">Product Designer</p>
                        <p className="job-duration">June 2013 - Dec 2013</p>
                        <ul className="job-roles">
                            <li className="job-role">Designer and prototyped internal tools</li>
                            <li className="job-role">Worked with Privacy team to build assets and features</li>
                            <li className="job-role">Redesigned Newsfeed curation experience for mobile</li>
                        </ul>
                    </div>
                    <div className="ep-experience">
                        <h4 className="ep-head-4">Google Maps</h4>
                        <p className="job-position">UX/UI Design Intern</p>
                        <p className="job-duration">June 2012 - Sep 2013</p>
                        <ul className="job-roles">
                            <li className="job-role">Contributed to Maps on iOS wireframe ans user experience</li>
                            <li className="job-role">Designed and prototyped onboarding experience</li>
                            <li className="job-role">Asset and feature design for Maps on Android</li>
                        </ul>
                    </div>
                    <div className="ep-education">
                        <h3 className="ep-head-3">Education</h3>
                        <h4 className="ep-head-4 uni-head">Brown University</h4>
                        <p className="job-duration">Interdisciplinary studies, Sep 2010 - May 2013</p>
                        <h4 className="ep-head-4 uni-head">Rhode Island School of Design</h4>
                        <p className="job-duration">BFA Industrial Design, Class of 2013</p>
                        <h4 className="ep-head-4 uni-head">Brown University</h4>
                        <p className="job-duration">Interdisciplinary studies, Sep 2010 - May 2013</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntrepreneurPortfolio