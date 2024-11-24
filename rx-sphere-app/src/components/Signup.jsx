import React, {useRef, useState} from 'react';
import styles from './Signup.module.css'; // CSS for styling

import {useNavigate} from 'react-router-dom';
import {useUser} from "../../context/UserContext.jsx";


function SignupPage() {
    const navigate = useNavigate();
    const inputFileRef = useRef(null);
    const { setUser } = useUser();


    // State for form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [status, setStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

     // Handle form submit
    const handleSubmit = async (event) => {
        event.preventDefault();  // Prevent page reload on form submit
        if (password !== confirmPassword) {
            setErrorMessage("Passwords don't match. Try again.");
            return;
        }

        try {
            console.log(email, password);
            const response = await fetch('/api/users/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    dob: dob,
                    password: password,
                    status: status,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Signup succesful');
                console.log(data);

                setUser({ id: data.user._id, name: data.user.status });
            } else {
                console.error('Error response:', errorMessage);
                setErrorMessage(data.message);
            }
        } catch (error) {
            console.error('Network error:', error)
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
                <h1 className="brand-name" onClick={(e) => navigate("/")}>
                    <span className={styles.turq}>Rx</span>
                    <span className={styles.darkBlue}>Sphere</span>
                </h1>
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
                            <input type="file" accept="image/*" className={styles.inputFile} hidden/>
                            <div className={styles.imgView} onDrop={handleDrop} onDragOver={handleDragOver}>
                                <img src="/upload_icon.png" alt="Upload Icon"/>
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
                                required
                            />
                            By creating an account, I agree to the <a href="https://google.com">Terms of use</a> and <a href="https://google.com">Privacy Policy</a>
                        </label>
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

export default SignupPage;