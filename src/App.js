import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp"; // Import SignUp component
import ScheduleManager from './components/ScheduleManager';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> {/* Fix route to use SignUp */}
        <Route path="/schedule-manager" element={<ScheduleManager />} />
      </Routes>
    </Router>
  );
}

export default App;