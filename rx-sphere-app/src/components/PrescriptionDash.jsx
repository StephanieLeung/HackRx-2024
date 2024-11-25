import React, {useEffect, useState} from 'react';
import styles from './PrescriptionDash.module.css'; // CSS for styling

import {useNavigate} from 'react-router-dom';
import {useUser} from '../../context/UserContext.jsx'
import NavBar from "./NavBar.jsx";



function PrescriptionDashPage() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <NavBar/>
            {/* Main Content */}
            <div className="content">
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