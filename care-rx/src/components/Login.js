import React, {useState} from 'react';
import styles from './Login.module.css'; // CSS for styling

import {useNavigate} from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for handling error messages

     // Handle form submit
    const handleSubmit = (event) => {
        event.preventDefault();  // Prevent page reload on form submit
        // Example validation (add real validation logic here)
        if (!email || !password) {
            setErrorMessage('Please enter both email and password.');
            return;
        }
    }

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    return (
        <div className={styles.container}>
            {/* Header with Login */}
            <nav>
                <h1 onClick={(e) => navigate("/")}>CareRX</h1>
                <button className={[styles.btn, styles.signupBtn].join(' ')} onClick={handleSignUpClick}>Sign Up</button>
            </nav>
            {/* Main Content */}
            <div className={styles.content}>
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
    );
}

export default LoginPage;