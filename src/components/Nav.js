import React from 'react';
import {Container,Box,Typography,makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {logout} from '../redux/slice/userSlice';
import {useDispatch,useSelector} from 'react-redux';

const useStyle = makeStyles(()=>({
    logoutButton:{
        cursor:"pointer"
    }
}))


const Nav = () => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const {userInfo}= useSelector(state=>state.user);

    const handleLogout = ()=>{ // logout user menthod
        dispatch(logout())
    }
    return (
        <Container maxWidth="md">
            <Box display="flex" justifyContent="space-between" alignContent="center" flexWrap="wrap" p={1}>
                <Typography variant="h5">Logo</Typography>
                <Box display="flex" alignItems="center" flexWrap="wrap">
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
                        <Link to="/createProduct">
                        <Typography>Create Product</Typography>
                        </Link>
                    </Box>
                    <Box pr={2}>
                        <Link to="/dashboard">
                        <Typography>Dashboard</Typography>
                        </Link>
                    </Box>

                    <Box >
                        {userInfo?.email  ?
                        
                        <Typography className={classes.logoutButton} onClick={handleLogout}>Log out</Typography>
                        :
                        <Link to="/login">
                        <Typography>Login</Typography>
                        </Link>
                        }
                    </Box>
                </Box>
            </Box>
            
        </Container>
    )
}

export default Nav
