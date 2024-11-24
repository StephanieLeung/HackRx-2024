import React from 'react';
import styles from './Landing.module.css'; // CSS for styling
import {useNavigate} from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    return (
        <div className={styles.landingContainer}>
            {/* Header with Login */}
            <nav>
                <button className={[styles.btn, styles.loginBtn].join(' ')} onClick={handleLoginClick}>Login</button>
            </nav>

            {/* Main Content */}
            <div className={styles.mainContent}>
                {/* Left Column - Text */}
                <div className={styles.textContent}>
                    <div className={styles.content}>
                        <h2 className="brand-name">
                            <span className={styles.turq}>Rx</span>
                            <span className={styles.darkBlue}>Sphere</span>
                        </h2>
                        <p>
                            Welcome to CareRx—your trusted telepharmacy. Connect with pharmacists, manage medications,
                            and
                            refill prescriptions from home. We make healthcare simple and accessible. Your care, our
                            commitment.
                        </p>
                        <button className={[styles.btn, styles.getStartedBtn].join(' ')} onClick={handleSignUpClick}>Get Started</button>
                    </div>

                </div>

                {/* Right Column - Illustration */}
                <div>
                    <img src="/doctor.png" alt="Pharmacist Illustration"/>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;