// App.js

import React, { useState } from 'react';
import SignUp from './MainLayout/signUp';
import SignIn from './MainLayout/login';
import MainLayout from './MainLayout/MainLayout'; // Import your authenticated screen component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUp = (formData) => {
    // Handle sign-up logic here (e.g., send request to backend API)
    console.log('Sign-up form data:', formData);
  };

  const handleSignIn = (formData) => {
    // Handle sign-in logic here (e.g., send request to backend API)
    console.log('Sign-in form data:', formData);
    // Simulating successful sign-in by setting isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <React.Fragment>
      <Router>
        <div>
          <Routes>
            {/* Define routes for sign-up, sign-in, and authenticated screens */}
            <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />

            <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />

            {/* If user is authenticated, render MainLayout component, else redirect to sign-in */}
            <Route exact path="/" element={isLoggedIn ? <SignIn /> : <SignIn to="/signin" />}>

            </Route>
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default App;
