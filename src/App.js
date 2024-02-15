import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './Main/TopBar';

const Register = () => <div>Register Page Content</div>;
const Login = () => <div>Login Page Content</div>;
const OtherOption = () => <div>Other Option Page Content</div>;

const App = () => {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/other-option" component={OtherOption} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
