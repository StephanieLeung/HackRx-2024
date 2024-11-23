import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from './components/Landing';
import LoginPage from './components/Login';
import SignupPage from './components/Signup';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/signup" element={<SignupPage />}/>
        </Routes>
    </Router>
  );
}

export default App;
