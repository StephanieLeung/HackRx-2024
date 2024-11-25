import React, {useEffect, useState} from 'react';
import styles from './Journal.module.css'; // CSS for styling

import {useNavigate, useParams} from 'react-router-dom';
import {useUser} from '../../context/UserContext.jsx'
import NavBar from "./NavBar.jsx";



function JournalPage() {
    const navigate = useNavigate();
    const { name } = useParams();
    const { user, setUser } = useUser();


    return (
        <div className="container">
            <NavBar/>
            {/* Main Content */}
            <div className="content">
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