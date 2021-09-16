import React from 'react';
import {Container,Box,Typography} from '@material-ui/core';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <Container maxWidth="md">
            <Box display="flex" justifyContent="space-between" alignContent="center" flexWrap="wrap" p={1}>
                <Typography variant="h5">Logo</Typography>
                <Box display="flex" alignItems="center">
                    <Box pr={2}>
                        <Link to="/">
                        <Typography>Home</Typography>
                        </Link>
                    </Box>
                    <Box pr={2}>
                        <Link to="/about">
                        <Typography>about</Typography>
                        </Link>
                    </Box>
                    <Box pr={2}>
                        <Link to="/login">
                        <Typography>Login</Typography>
                        </Link>
                    </Box>
                    <Box>
                        <Link to="/dashboard">
                        <Typography>Dashboard</Typography>
                        </Link>
                    </Box>
                </Box>
            </Box>
            
        </Container>
    )
}

export default Nav
