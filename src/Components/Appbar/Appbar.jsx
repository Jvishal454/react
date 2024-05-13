import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function MenuAppBar({ toggleSidenav }) {
  return (
    <Box sx={{ flexGrow: 1, zIndex:1201 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleSidenav}
          >
            <MenuIcon style={{ fontSize: '2rem' }}/>
          </IconButton>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2  }}>
            News
          </Typography> */}
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Account"
            sx={{ marginLeft: 'auto' }}
          >
            <AccountCircle style={{ fontSize: '2rem' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
