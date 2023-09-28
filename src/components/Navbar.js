import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
        <Container maxWidth="xs">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Bank of Java
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
  )
}

export default Navbar