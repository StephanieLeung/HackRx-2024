import React, {useEffect, useState} from 'react';
import styles from './Prescription.module.css'; // CSS for styling

import {useNavigate, useParams} from 'react-router-dom';
import {useUser} from '../../context/UserContext.jsx'



function PrescriptionPage() {
    const navigate = useNavigate();
    const { name } = useParams();
    const { user, setUser } = useUser();


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
                    <div className={styles.topContent}>
                        <div className={styles.info}>
                            <h1>0.05 MG SYNTHROID</h1>
                            <h3>DIN: 02172080</h3>
                            <h3>Equiv. to: Levoxyl</h3>
                            <h3>Remain: 100 TAB</h3>
                            <h3>Dosage Instructions: TAKE 1 TAB ONCE DAILY (MONDAY TO FRIDAYS ONLY)</h3>
                        </div>
                        <div className={styles.refillBtns}>
                            <button className={styles.btn}>Request for Refill</button>
                            <button className={styles.btn}>Request for Refill Renewal</button>
                        </div>
                    </div>
                    <div className={styles.bottomContent}>
                        <h1>Refill History</h1>
                        <table>
                            <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Exp:</th>
                                <th scope="col">Rx</th>
                                <th scope="col">LOT</th>
                                <th scope="col">Ph.</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>13-Aug-2023</td>
                                <td>2028-01</td>
                                <td>1234567</td>
                                <td>12345678</td>
                                <td>Johnny Apple</td>
                            </tr>
                            <tr>
                                <td>20-Nov-2023</td>
                                <td>2028-04</td>
                                <td>2345678</td>
                                <td>12345678</td>
                                <td>Kristin Lee</td>
                            </tr>
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrescriptionPage;