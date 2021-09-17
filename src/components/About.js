import React from 'react';
import {Container,Box,Typography,Grid,makeStyles} from '@material-ui/core';


const useStyle = makeStyles(()=>({
    contentContainer:{
        border:"1px solid grey",
        marginTop:30
    },
    
}))

const About = () => {
    const classes = useStyle()
    return (
        <Container maxWidth="md">
             <Grid container justifyContent="center">
                 <Grid item xs={12} >
                    <Box p={2} className={classes.contentContainer} >
                        <Box pb={1}>
                        <Typography variant="h6">Sweet iTech</Typography>
                        </Box>
                    <Typography>
                        A state of the art IT company, providing services with customised web-based solutions, cloud-native applications, user-friendly mobile applications, e-commerce systems, corporate websites and most importantly, software ecosystems.
                        </Typography>
                    </Box>
                 </Grid>
                 </Grid>
            
        </Container>
    )
}

export default About
