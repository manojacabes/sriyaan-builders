import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './Main/TopBar';
import Body from './Main/Body';
import { Container } from '@mui/material';
import ProductDetails from './Main/ProductDetails';
// const Register = () => <div>Register Page Content</div>;
// const Login = () => <div>Login Page Content</div>;
// const OtherOption = () => <div>Other Option Page Content</div>;

const App = () => {
  return (
    <Router>
      <div>
        <TopBar />
        <Container sx={{ height: 'calc(100vh - 64px)', overflow: 'auto' }}>
          <Routes>
            <Route exact path="/login" component={<Body />} />
            <Route path="/product/:id" component={<ProductDetails />} />
            {/* <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/other-option" component={OtherOption} /> */}
            {/* Add more routes as needed */}
          </Routes>
        </Container>

      </div>
    </Router>
  );
};

export default App;
