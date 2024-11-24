import React, {useEffect, useState} from 'react';
import styles from './PrescriptionDash.module.css'; // CSS for styling

import {useNavigate} from 'react-router-dom';
import {useUser} from '../../context/UserContext.jsx'



function PrescriptionDashPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            {/* Header with Login */}
            <nav className={styles.navBar}>
                <h1 className='brand-name'>
                    <span className={styles.turq}>Rx</span>
                    <span className={styles.white}>Sphere</span>
                </h1>
                <hr/>
                <div className={styles.navButtons}>
                    <div className={styles.titleNav}>
                        <h3>Menu</h3>

                        <button className={styles.menuBtn}>
                            <img src="/dashboard_icon.png" alt="Dashboard"/>
                            <span>Dashboard</span>
                        </button>
                    </div>
                    <button className={styles.menuBtn} onClick={() => navigate('/profile')}>
                        <img src="/profile_icon.png" alt="Profile_icon"/>
                        <span>My Profile</span>
                    </button>
                    <button className={[styles.menuBtn, styles.active].join(' ')}>
                        <img src="/rx.png" alt="Prescription_icon"/>
                        <span>My Prescriptions</span>
                    </button>
                    <button className={styles.menuBtn}
                            onClick={(e) => navigate('/appointments')}>
                        <img src="/appointment.png" alt="Appointment"/>
                        <span>Manage Appointments</span>
                    </button>
                    <button className={styles.menuBtn} onClick={() => navigate('/journal')}>
                        <img src="/journal.png" alt="Journal_icon"/>
                        <span>Health Journal</span>
                    </button>
                </div>
            </nav>
            {/* Main Content */}
            <div className={styles.content}>
                <h1>My Prescriptions</h1>
                <div className={styles.mainContent}>
                    <div className={styles.gridSquare}>
                        <h1>0.05 MG SYNTHROID</h1>
                        <h3>DIN: 02172070</h3>
                        <h3>Remain: 100 TAB</h3>
                        <button className={styles.btn} onClick={() => navigate('/prescription/mg synthroid')}>See more</button>
                    </div>
                    <div className={styles.gridSquare}></div>
                    <div className={styles.gridSquare}></div>
                    <div className={styles.gridSquare}></div>
                    <div className={styles.gridSquare}></div>
                    <div className={styles.gridSquare}></div>
                    <div className={styles.gridSquare}></div>
                    <div className={styles.gridSquare}></div>
                </div>
            </div>
        </div>
    );
}

export default PrescriptionDashPage;