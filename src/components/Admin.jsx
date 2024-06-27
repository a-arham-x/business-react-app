import React from 'react'
import UserNavbar from "./UserNavbar"
import UserSideNavbar from './UserSideNavbar'
import AdminDashboard from './AdminDashboard'
import UsersTable from './UsersTable'
import AdminManageIdeas from './AdminManageIdeas'
import { useLocation } from 'react-router-dom'
import "./assets/admin.css"
import AdminManageContract from './AdminManageContract'

function Admin() {
    const location = useLocation();
    return (
        <>
            <UserNavbar />
            <div className="admin-container">
                <UserSideNavbar />
                {location.pathname === "/admin/dashboard" && <AdminDashboard />}
                {location.pathname === "/admin/investor" && <UsersTable />}
                {location.pathname === "/admin/entrepreneur" && <UsersTable />}
                {location.pathname === "/admin/skilled-person" && <UsersTable />}
                {location.pathname === "/admin/ideas" && <AdminManageIdeas />}
                {location.pathname === "/admin/contract" && <AdminManageContract />}
            </div>
        </>
    )
}

export default Admin