import React, {useEffect, useState} from 'react';
import styles from './Appointments.module.css'; // CSS for styling

import {useNavigate} from 'react-router-dom';
import {useUser} from '../../context/UserContext.jsx'
import NavBar from "./NavBar.jsx";


const items = [
    {id: 1, status: 'Open'},
    {id: 2, status: 'Booked'},
    {id: 3, status: 'Completed'},
];


function AppointmentsPage() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const {user} = useUser();

    useEffect(() => {
        async function fetchData() {
            try {
                const id = user._id;
                const response = await fetch('/api/users/appointments/' + id);
                const result = await response.json();

                if (response.ok) {
                    setData(result);
                }

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'open':
                return 'open';
            case 'booked':
                return 'booked';
            case 'completed':
                return 'completed';
        }
    };

    return (
        <div className="container">
            {/* Header with Login */}
            <NavBar/>
            {/* Main Content */}
            <div className="content">
                <h1>Manage Appointments</h1>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Appointment Date & Time</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.datetime}</td>
                            <td className={getStatusClass(item.status)}>{item.status}</td>
                            <div className={styles.actionBtn}>
                                <button className={styles.bookBtn}>Book Now</button>
                                <button className={styles.deleteBtn}><img src="/trash-2 2.png" alt="Trash can"/>
                                </button>
                            </div>
                        </tr>
                    ))}
                    <tr>
                        <td>Jane Cooper</td>
                        <td>780 123 4567</td>
                        <td>13-Aug-2023 at 10:00 AM</td>
                        <td>
                        <div className={styles.open}>Open</div>
                        </td>
                        <td>
                            <div className={styles.actionBtn}>
                                <button className={styles.bookBtn}>Book Now</button>
                                <button className={styles.deleteBtn}><img src="/trash-2 2.png" alt="Trash can"/>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Jane Cooper</td>
                        <td>780 123 4567</td>
                        <td>13-Aug-2023 at 10:00 AM</td>
                        <td>
                        <div className={styles.booked}>Booked</div>
                        </td>
                        <td>
                            <div className={styles.actionBtn}>
                                <button className={styles.bookBtn}>Book Now</button>
                                <button className={styles.deleteBtn}><img src="/trash-2 2.png" alt="Trash can"/>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Jane Cooper</td>
                        <td>780 123 4567</td>
                        <td>13-Aug-2023 at 10:00 AM</td>
                        <td>
                            <div className={styles.completed}>Completed</div>
                        </td>
                        <td>
                            <div className={styles.actionBtn}>
                                <button className={styles.bookBtn}>Book Now</button>
                                <button className={styles.deleteBtn}><img src="/trash-2 2.png" alt="Trash can"/></button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default AppointmentsPage;