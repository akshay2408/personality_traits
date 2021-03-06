import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

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
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {/* Redirect to home page */}
                        <Link to="/" className='navbar-link'>Personality Traits</Link>
                        </Typography>
                        {/* Redirect to show page */}
                        <Button color="inherit"><Link to="/show" className='navbar-link'>Show</Link></Button>
                        {/* Redirect to create page */}
                        <Button color="inherit"><Link to="/create" className='navbar-link'>Create</Link></Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
