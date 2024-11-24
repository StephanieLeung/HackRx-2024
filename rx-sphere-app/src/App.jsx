import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {UserProvider} from '../context/UserContext.jsx'
import LandingPage from './components/Landing.jsx';
import LoginPage from './components/Login.jsx';
import SignupPage from './components/Signup.jsx';
import AppointmentsPage from "./components/Appointments.jsx";
import './App.css'


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
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
