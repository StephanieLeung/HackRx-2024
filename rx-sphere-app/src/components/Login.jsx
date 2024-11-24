import React, {useEffect, useState} from 'react';
import styles from './Login.module.css'; // CSS for styling

import {useNavigate} from 'react-router-dom';
import { useUser } from "../../context/UserContext.jsx";


function LoginPage() {
    const navigate = useNavigate();
    const { setUser } = useUser();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for handling error messages

     // Handle form submit
    const handleSubmit = async (event) => {
        event.preventDefault();  // Prevent page reload on form submit

        try {
            console.log(email, password);
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Login succesful');
                console.log(data.user);
                console.log(data.user._id);
                setUser(data.user);
                navigate('/profile');
            } else {
                console.error('Error response:', errorMessage);
                setErrorMessage(data.message);
            }
        } catch (error) {
            console.error('Network error:', error)
        }
    };

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    return (
        <div className={styles.container}>
            {/* Header with Login */}
            <nav className={styles.navBar}>
                <h1 className="brand-name" onClick={(e) => navigate("/")}>
                    <span className={styles.turq}>Rx</span>
                    <span className={styles.darkBlue}>Sphere</span>
                </h1>
                <button className={[styles.btn, styles.signupBtn].join(' ')} onClick={handleSignUpClick}>Sign Up</button>
            </nav>
            {/* Main Content */}
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <img src="/bro.png" alt="Doctors"/>
                </div>
                <div className={styles.rightContent}>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                        </div>

                        {errorMessage && <div className="error-message">{errorMessage}</div>}

                        <div className={styles.formGroup}>
                            <button type="submit" className={styles.btn}>Continue</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default LoginPage;