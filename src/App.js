// App.js

import React, { useState } from 'react';
import SignUp from './MainLayout/signUp';
// import { IconButton } from '@mui/material'
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import SignIn from './MainLayout/login';
import { ClearIcon } from '@mui/icons-material'
import Home from './MainLayout/HomeContent/Home';
import MultiStepForm from './MainLayout/JobApply';
import MyOrders from './MainLayout/MyOrders/MyOrder'
import Homelayout from './MainLayout/HomeLayout';
import LayoutComponent from './MainLayout/layout';
import Dashboard from './Dashboard/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardApp from './Dashboard/dummyCheck';

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
  const notistackRef = React.createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };
  return (
    <SnackbarProvider
      maxSnack={4}
      autoHideDuration={3000}
      ref={notistackRef}
      style={{ pointerEvents: 'all' }}
      // action={(key) => (
      //   <IconButton style={{ color: '#eeeeee' }} onClick={onClickDismiss(key)}>
      //     <ClearIcon />
      //   </IconButton>
      // )}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}>
      <React.Fragment>
        <Router>
          <div>
            <Routes>
              <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
              <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
              {/* <Route path="/orders" element={<Homelayout />} /> */}
              <Route path="/orders" element={<LayoutComponent>
                <Routes>
                  <Route index element={<MyOrders />} />
                </Routes>
              </LayoutComponent>}
              />
              <Route path="/about" element={<LayoutComponent>
                <Routes>
                  <Route index element={<Homelayout />} />
                </Routes>
              </LayoutComponent>}
              />
              <Route path="/home" element={<LayoutComponent>
                <Routes>
                  <Route index element={<Home />} />
                </Routes>
              </LayoutComponent>}
              />
              <Route path="/dashboard" element={
                <Routes>
                  <Route index element={<Dashboard />} />
                </Routes>}
              />
              <Route path="/dashboard-app" element={
                <Routes>
                  <Route index element={<DashboardApp />} />
                </Routes>}
              />
              <Route path="/requite" element={<LayoutComponent>
                <Routes>
                  <Route index element={<MultiStepForm />} />
                </Routes>
              </LayoutComponent>}
              />
              <Route exact path="/" element={isLoggedIn ? <SignIn /> : <SignIn to="/signin" />}>

              </Route>
            </Routes>
          </div>
        </Router>
      </React.Fragment>
    </SnackbarProvider>
  );
};

export default App;
