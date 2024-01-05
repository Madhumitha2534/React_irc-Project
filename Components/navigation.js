import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <AppBar position="static">
    <Tabs>
      <Tab label="Home" component={Link} to="/" />
      <Tab label="Login" component={Link} to="/login" />
      <Tab label="Registration" component={Link} to="/registration" />
      <Tab label="Hotel List" component={Link} to="/hotels" />
      <Tab label="Payment" component={Link} to="/payment" />
      <Tab label="About Us" component={Link} to="/about" />
    </Tabs>
  </AppBar>
);       