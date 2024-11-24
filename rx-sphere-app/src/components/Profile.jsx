import React, {useEffect, useState} from 'react';
import styles from './Profile.module.css'; // CSS for styling

import {useNavigate} from 'react-router-dom';
import {useUser} from '../../context/UserContext.jsx'



function ProfilePage() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const { user, setUser } = useUser();


    const handleLogout = () => {
        setUser(null);
        navigate('/login');
    };
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    if (!user) {
        return null;
    }

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
                    <button className={[styles.menuBtn, styles.active].join(' ')}>
                        <img src="/profile_icon.png" alt="Profile_icon"/>
                        <span>My Profile</span>
                    </button>
                    <button className={styles.menuBtn} onClick={() => navigate('/prescription')}>
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
                <div className={styles.topBar}>
                    <h1>My Profile</h1>
                    <button className={styles.btn} onClick={handleLogout}>
                        <img src="/logout.png" alt="logout"/>
                        <span>Log Out</span>
                    </button>
                </div>
                <div className={styles.mainContent}>
                    <div className={styles.profilePic}>
                        <img src="/profile_pic.png" alt="profile_pic"/>
                    </div>
                    <div className={styles.info}>
                    <div className={styles.profileInfo}>
                            <h2>Name</h2>
                            <h3>{user.name}</h3>
                        </div>
                        <div className={styles.profileInfo}>
                            <h2>Email</h2>
                            <h3>{user.email}</h3>
                        </div>
                        <div className={styles.profileInfo}>
                            <h2>Phone Number</h2>
                            <h3>{user.phoneNumber}</h3>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ProfilePage;