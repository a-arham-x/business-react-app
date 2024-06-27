import React from 'react'
import UserNavbar from "./UserNavbar"
import UserSideNavbar from './UserSideNavbar'
import EntrepreneurDashboard from './EntrepreneurDashboard'
import EntrepreneurIdeas from './EntrepreneurIdeas'
import EntrepreneurEdit from './EntrepreneurEdit'
import EntrepreneurAddIdea from './EntrepreneurAddIdea'
import EntrepreneurHiring from './EntrepreneurHiring'
import EntrepreneurSearch from './EntrepreneurSearch'
import Contract from "./Contract"
import { useLocation } from 'react-router-dom'
import "./assets/entrepreneur.css"
import EntrepreneurPortfolio from './EntrepreneurPortfolio'
import Tracking from './Tracking'

function Entrepreneur() {
    const location = useLocation();
    return (
        <>
            <UserNavbar />
            <div className="entrepreneur-container">
                <UserSideNavbar />
                {location.pathname === "/entrepreneur/dashboard" && <EntrepreneurDashboard />}
                {location.pathname === "/entrepreneur/ideas" && <EntrepreneurIdeas />}
                {location.pathname === "/entrepreneur/edit" && <EntrepreneurEdit />}
                {location.pathname === "/entrepreneur/newidea" && <EntrepreneurAddIdea />}
                {location.pathname === "/entrepreneur/hiring" && <EntrepreneurHiring />}
                {location.pathname === "/entrepreneur/search" && <EntrepreneurSearch />}
                {location.pathname === "/entrepreneur/portfolio" && <EntrepreneurPortfolio />}
                {location.pathname === "/entrepreneur/contract" && < Contract />}
                {location.pathname === "/entrepreneur/tracking" && <Tracking />}
            </div>
        </>
    )
}

export default Entrepreneur