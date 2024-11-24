import {useState} from 'react'
import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {UserProvider} from '../context/UserContext.jsx'
import LandingPage from './components/Landing.jsx';
import LoginPage from './components/Login.jsx';
import SignupPage from './components/Signup.jsx';
import AppointmentsPage from "./components/Appointments.jsx";
import ProfilePage from "./components/Profile.jsx"
import PrescriptionDashPage from "./components/PrescriptionDash.jsx";
import PrescriptionPage from "./components/Prescription.jsx";
import JournalPage from "./components/Journal.jsx";


function App() {
    const [count, setCount] = useState(0)

    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                    <Route path="/appointments" element={<AppointmentsPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/prescription" element={<PrescriptionDashPage/>}/>
                    <Route path="/prescription/:name" element={<PrescriptionPage/>}/>
                    <Route path="/journal" element={<JournalPage/>}/>
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
