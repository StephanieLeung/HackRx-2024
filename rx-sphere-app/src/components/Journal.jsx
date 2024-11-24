import React, {useEffect, useState} from 'react';
import styles from './Journal.module.css'; // CSS for styling

import {useNavigate, useParams} from 'react-router-dom';
import {useUser} from '../../context/UserContext.jsx'



function JournalPage() {
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
                    <button className={styles.menuBtn} onClick={() => navigate('/prescription')}>
                        <img src="/rx.png" alt="Prescription_icon"/>
                        <span>My Prescriptions</span>
                    </button>
                    <button className={styles.menuBtn}
                            onClick={() => navigate('/appointments')}>
                        <img src="/appointment.png" alt="Appointment"/>
                        <span>Manage Appointments</span>
                    </button>
                    <button className={[styles.menuBtn, styles.active].join(' ')}>
                        <img src="/journal.png" alt="Journal_icon"/>
                        <span>Health Journal</span>
                    </button>
                </div>
            </nav>
            {/* Main Content */}
            <div className={styles.content}>
                <h1>My Prescriptions</h1>
                <div className={styles.mainContent}>
                    <div className={styles.leftContent}>
                        <div className={styles.leftSub}>
                            <div className={styles.topBar}>
                                <div className={styles.title}>
                                    <img src="/blood_pressure.png" alt="blood_pressure"/>
                                    <h1>Blood Dosage</h1>
                                </div>

                                <button className={styles.btn}>See History</button>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.category}>
                                    <h2>118</h2>
                                    <h3>SYS</h3>
                                </div>
                                <div className={styles.category}>
                                    <h2>76</h2>
                                    <h3>DIA</h3>
                                </div>
                                <div className={styles.category}>
                                    <h2>73</h2>
                                    <h3>PUL</h3>
                                </div>
                            </div>
                        </div>
                        <div className={styles.leftSub}></div>
                    </div>
                    <div className={styles.rightContent}>
                        <h1>Side Effects Tracker</h1>
                        <div className={styles.rightSub}>
                            <div className={styles.topBar}>
                                <h1>Ozempic</h1>
                                <button className={styles.btn}>See All Side Effects</button>
                            </div>
                            <form>
                                <textarea rows="10" cols="15" placeholder="Log your side effects here..."></textarea>
                                <button type="submit" className={styles.btn}>Submit</button>
                            </form>

                        </div>
                        <div className={styles.rightSub}></div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default JournalPage;