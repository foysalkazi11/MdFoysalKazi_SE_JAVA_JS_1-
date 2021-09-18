import React from 'react';
import {Container,Box,Typography,Grid,TextField,Button} from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
import {login} from '../redux/slice/userSlice';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

const defaultValues ={
    email:"",
    password:""
}

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { handleSubmit, control, reset,formState: { errors }, } = useForm({defaultValues});

    const onSubmit = data =>{ // submit data for login
        dispatch(login(data))
        reset(defaultValues)
        history.push("/")
    }
    return (
        <Container maxWidth="md">
            <Grid container justifyContent="center">
                <Grid item xs={12} md={6} >
                    <Box py={2}>
                    <Typography variant="h6">Login</Typography>
                    </Box>
                </Grid>

            </Grid>
                <Box pt={2}>
                <form onSubmit={handleSubmit(onSubmit)}>
                
                <Grid container spacing={2}>
                    <Grid container  item xs={12} justifyContent="center">
                    <Grid item xs={12} md={6}>
                    <Controller 
                        render={({field})=> <TextField 
                        {...field}
                        type="email" 
                        label="Email"
                         variant="outlined" 
                         fullWidth 
                         error={errors.email ? true: false}
                         helperText={errors.email && "Please enter valid email"}
                         size="small"
                         />}
                         rules={{ pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,required:true }} 
                        control={control}
                        name="email" 
                         />
                    </Grid>
                    </Grid>
                    <Grid container  item xs={12} justifyContent="center">
                    <Grid item xs={12} md={6}>
                    <Controller 
                        render={({field})=> <TextField 
                        {...field}
                        type="password" 
                        label="Password"
                         variant="outlined" 
                         fullWidth 
                         error={errors.password ? true: false}
                         helperText={errors.password && "Minimum 6 characters, at least one uppercase letter, one lowercase letter, one number and one special character (#?!@$%^&*-)  "}
                        size="small"
                         />}
                         rules={{ pattern:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,required:true }} 
                        control={control}
                        name="password" 
                         />
                    </Grid>
                    </Grid>
                    <Grid container  item xs={12} justifyContent="center">
                    <Grid item xs={12} md={6}>
                    <Button variant="outlined" color="primary" type="submit"> Login </Button>

                    </Grid>
                    </Grid>
                    </Grid>
                </form>
            </Box>
            
        </Container>
    )
}

export default Login
