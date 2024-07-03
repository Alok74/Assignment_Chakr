import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import AddIcon from '@mui/icons-material/Add';

const Navbar = () => {
  return (
    <AppBar style={{background:"#F5F5F5"}} position="static" color="transparent" elevation={0}>
      <Toolbar>
        <BusinessIcon style={{ marginRight: 10 }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Companies
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="add">
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
