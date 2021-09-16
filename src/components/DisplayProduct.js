import React from 'react';
import {Container,Box,Typography,Grid,makeStyles} from '@material-ui/core';
import {useSelector} from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const useStyle = makeStyles((theme)=>({
    productContainer:{
        border:"1px solid grey"
    },
    imageBox:{
        width:"100%",
        height:200,
        overflow:"hidden",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        [theme.breakpoints.down("sm")]:{
            height:180,
        },
        [theme.breakpoints.down("xs")]:{
            height:160,
        }

    },
    deleteIcon:{
        cursor:"pointer"
    }
}))

const ShowProduct = () => {
    const classes = useStyle()
    const {productList} = useSelector(state => state.product)
    console.log(productList);
    return (
        <Container maxWidth="md">
            <Grid container>
                <Grid item xs={12}>
                    <Box pb={2}>
                        <Typography variant="h6">All product</Typography>
                    </Box>
                </Grid>
                <Grid container item xs={12} spacing={2}>
                    {
                    productList?.map((item,index)=>{
                        return(
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box display='flex' flexDirection="column" p={1} className={classes.productContainer}>
                                    <Box  className={classes.imageBox}>
                                        <Typography variant="h6">Image</Typography>
                                    </Box>
                                    <Box  display="flex" flexDirection="column">
                                        <Box pb={1}>
                                        <Typography>{item?.name}</Typography>
                                        </Box>
                                        <Box display="flex" alignItems="center" justifyContent="space-between">
                                        <Typography>{item?.price} TK</Typography>
                                        <DeleteOutlineIcon  className={classes.deleteIcon}/>
                                        </Box>
                                    </Box>
                                </Box>

                            </Grid>
                        )
                    })
                   }
                </Grid>

            </Grid>
        
        </Container>
    )
}

export default ShowProduct
