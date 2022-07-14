import React from 'react'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route, Link } from "react-router-dom";
export default function NavBar() {


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" className='navbar-link'>  Personality Traits</Link>
                        </Typography>
                        <Button color="inherit"><Link to="/show" className='navbar-link'>Show</Link></Button>
                        <Button color="inherit"><Link to="/create" className='navbar-link'> Create</Link></Button>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Personality Trait</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}
        </>
    )
}
