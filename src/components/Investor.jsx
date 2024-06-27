import React from 'react'
import UserNavbar from "./UserNavbar"
import UserSideNavbar from './UserSideNavbar'
import InvestorMakeContract from './InvestorMakeContract'
import InvestorPortfolio from './InvestorPortfolio'
import Contract from './Contract'
import InvestorProfile from './InvestorProfile'
import InvestorIdeas from './InvestorIdeas'
import InvestorDetails from './InvestorDetails'
import Tracking from './Tracking'
import { useLocation } from 'react-router-dom'
import "./assets/investor.css"

function Investor() {
    const location = useLocation();
    return (
        <>
            <UserNavbar />
            <div className="investor-container">
                <UserSideNavbar />
                {location.pathname === "/investor/makecontract" && <InvestorMakeContract />}
                {location.pathname === "/investor/portfolio" && <InvestorPortfolio />}
                {location.pathname === "/investor/contract" && <Contract />}
                {location.pathname === "/investor/profile" && <InvestorProfile />}
                {location.pathname === "/investor/ideas" && <InvestorIdeas />}
                {location.pathname === "/investor/viewdetails" && <InvestorDetails />}
                {location.pathname === "/investor/tracking" && <Tracking />}
            </div>
        </>
    )
}

export default Investor