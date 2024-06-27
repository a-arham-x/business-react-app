import React from 'react'
import UserNavbar from "./UserNavbar"
import UserSideNavbar from './UserSideNavbar'
import SkilledPersonDashboard from './SkilledPersonDashboard'
import SkilledPersonGigs from './SkilledPersonGigs'
import SkilledPersonUploadGigs from './SkilledPersonUploadGigs'
import { useLocation } from 'react-router-dom'

function SkilledPerson() {
    const location = useLocation();
    return (
        <>
            <UserNavbar />
            <div className="skilled-person-container">
                <UserSideNavbar />
                {location.pathname === "/skilled-person/dashboard" && <SkilledPersonDashboard />}
                {location.pathname === "/skilled-person/gigs" && <SkilledPersonGigs />}
                {location.pathname === "/skilled-person/uploadgigs" && <SkilledPersonUploadGigs />}
            </div>
        </>
    )
}

export default SkilledPerson