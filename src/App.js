import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './MainLayout/login';
// import Dashboard from './Dashboard';
import './App.css';
import MainLayout from './MainLayout/MainLayout';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Function to handle login
  const handleLogin = () => {
    // Your login logic here
    // Assuming login is successful, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen onLogin={handleLogin} />} />

        {isLoggedIn ?
          <Route path="/" element={<MainLayout />} /> :
          <Route path="/login" element={<LoginScreen onLogin={handleLogin} />} />
        }
      </Routes>
    </Router>
  );
};

export default App;
