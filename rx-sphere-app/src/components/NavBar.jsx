import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className='brand-name'>
                <span className="turq">Rx</span>
                <span className="white">Sphere</span>
            </h1>
            <hr/>
            <div className="nav-btns">
                <div className="title-nav">
                    <h3>Menu</h3>

                    <button className="menu-btn">
                        <img src="/dashboard_icon.png" alt="Dashboard"/>
                        <span>Dashboard</span>
                    </button>
                </div>
                <NavLink to="/profile" class={({ isActive }) => (isActive ? 'active' : '')}>
                    <button className="menu-btn">
                        <img src="/profile_icon.png" alt="Profile_icon"/>
                        <span>My Profile</span>
                    </button>
                </NavLink>
                <NavLink to="/prescription" class={({ isActive }) => (isActive ? 'active' : '')}>
                    <button className="menu-btn" >
                        <img src="/rx.png" alt="Prescription_icon"/>
                        <span>My Prescriptions</span>
                    </button>
                </NavLink>
                <NavLink class={({ isActive }) => (isActive ? 'active' : '')} to="/appointments">
                    <button className="menu-btn">
                        <img src="/appointment.png" alt="Appointment"/>
                        <span>Manage Appointments</span>
                    </button>
                </NavLink>
                <NavLink to="/journal" class={({ isActive }) => (isActive ? 'active' : '')}>
                    <button className="menu-btn">
                        <img src="/journal.png" alt="Journal_icon"/>
                        <span>Health Journal</span>
                    </button>
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar;