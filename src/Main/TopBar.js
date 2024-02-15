import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // If you're using React Router

const TopBarMui = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Logo 13
        </Typography>
        <Button component={Link} to="/register" color="inherit">Register</Button>
        <Button component={Link} to="/login" color="inherit">Login</Button>
        <Button component={Link} to="/other-option" color="inherit">Other Option</Button>
        {/* Add more options as needed */}
      </Toolbar>
    </AppBar>
  );
};

export default TopBarMui;
