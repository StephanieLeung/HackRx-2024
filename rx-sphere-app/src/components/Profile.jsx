import React, {useEffect, useState} from 'react';
import styles from './Profile.module.css'; // CSS for styling

import {useNavigate} from 'react-router-dom';
import {useUser} from '../../context/UserContext.jsx'
import NavBar from "./NavBar.jsx";



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
        <div className="container">
            {/* Header with Login */}
            <NavBar/>
            {/* Main Content */}
            <div className="content">
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