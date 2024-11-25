import React, {useEffect, useState} from 'react';
import styles from './Prescription.module.css'; // CSS for styling

import {useNavigate, useParams} from 'react-router-dom';
import {useUser} from '../../context/UserContext.jsx'
import NavBar from "./NavBar.jsx";



function PrescriptionPage() {
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