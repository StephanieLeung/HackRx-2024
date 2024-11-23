import React, {useRef, useState} from 'react';
import styles from './Signup.module.css'; // CSS for styling
import {ReCAPTCHA} from "react-google-recaptcha";

import {useNavigate} from 'react-router-dom';

function SignupPage() {
    const navigate = useNavigate();
    const inputFileRef = useRef(null);

    // State for form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [idFile, setFile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [status, setStatus] = useState("");
    const [captcha, setCaptcha] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

     // Handle form submit
    const handleSubmit = (event) => {
        event.preventDefault();  // Prevent page reload on form submit
        // Example validation (add real validation logic here)
        if (!email || !password) {
            setErrorMessage('Please enter both email and password.');
            return;
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (inputFileRef.current) {
            inputFileRef.current.files = files;
            console.log("Photo ID file received!");
        }
    }

    const handleLoginClick = (e) => {
        navigate("/login");
    }

    return (
        <div className={styles.container}>
            {/* Header with Login */}
            <nav>
                <h1 onClick={(e) => navigate("/")}>CareRX</h1>
                <button className={[styles.btn, styles.loginBtn].join(' ')} onClick={handleLoginClick}>Login</button>
            </nav>
            {/* Main Content */}
            <div className={styles.content}>
                <h1>Create an Account</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name} onChange={(e) => setName(e.target.value)}
                            placeholder="Legal Name"
                            required
                        />
                    </div>
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
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone} onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="dob">Date of Birth</label>
                        <input
                            type="date"
                            id="date"
                            value={dob} onChange={(e) => setDob(e.target.value)}
                            placeholder="YYYY-MM-DD"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="id">Photo ID</label>
                        <label htmlFor="input-file" className={styles.dropArea}>
                            <input type="file" accept="image/*" className={styles.inputFile} hidden required/>
                            <div className={styles.imgView} onDrop={handleDrop} onDragOver={handleDragOver}>
                                <img src="/upload_icon.png"/>
                                <p>Choose a file or drag it here</p>
                            </div>
                        </label>
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
                    <div className={styles.formGroup}>
                        <label htmlFor="confirm">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="status">Are you signing up as a patient or a pharmacist?</label>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="status"
                                value="patient"
                                checked={status === 'patient'}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            />
                            Patient
                        </label>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="status"
                                value="pharmacist"
                                checked={status === 'pharmacist'}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            />
                            Pharmacist
                        </label>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="agree" className={styles.agreeLabel}>
                            <input
                                type="checkbox"
                                id="agree"
                                name="agree"
                            />
                            By creating an account, I agree to the <a href="">Terms of use</a> and <a href="">Privacy Policy</a>
                        </label>
                    </div>
                    <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={(e) => setCaptcha(e)}/>

                    {errorMessage && <div className="error-message">{errorMessage}</div>}

                    <div className={styles.formGroup}>
                        <button type="submit" className={styles.btn}>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;