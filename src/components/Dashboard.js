import React,{useEffect,useState} from 'react';
import {Container,Box,Typography,Grid,makeStyles} from '@material-ui/core';
import {useSelector} from 'react-redux';

const useStyle = makeStyles(()=>({
    contentContainer:{
        border:"1px solid grey"
    },
    imageBox:{
        width:100,
        height:100,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginRight:16,
        borderRight:"1px solid grey"
    },
    profitText:{
        fontWeight:"bold"
    }
}))

const Dashboard = () => {
    const classes = useStyle()
    const {productList} = useSelector(state => state.product);
    const [profitableProduct,setProfitableProduct] = useState([])
    const calculateProfit =(percent, total) => {
        return Math.round(((percent/ 100) * total))
    }
    useEffect(() => {
        const calculateProfitableProduct = productList?.map(item => ({...item,profit: calculateProfit(item?.profitPercentage,item?.price)}))
        ?.sort((a,b) =>  b?.profit - a?.profit)
        ?.slice(0,5)
        setProfitableProduct(calculateProfitableProduct);
    }, [productList])
    return (
        <Container maxWidth="md">
             <Grid container justifyContent="center">
                 <Grid item xs={12}>
                    <Box py={2}>
                        <Typography variant="h6">Top 5 profitabel products</Typography>
                    </Box>
                 </Grid>
                <Grid item xs={12}>
                    {profitableProduct?.length ?
                    profitableProduct?.map((item,index)=>{
                        return(
                            <Box my={1} display="flex" alignItems="center" key={index} className={classes.contentContainer}>
                                <Box className={classes.imageBox}>
                                    <Typography>Image</Typography>
                                </Box>
                                <Box display="flex" flexDirection="column">
                                    <Typography variant="body1">Name : {item?.name}</Typography>
                                    <Typography variant="body1" className={classes.profitText}>Profit : {item?.profit}</Typography>
                                    <Box display='flex' alignItems="center">
                                        <Box pr={2}>
                                            <Typography variant="body2">Price : {item?.price}</Typography>
                                        </Box>
                                        <Typography variant="body2">Profit percentage : {item?.profitPercentage}</Typography>

                                    </Box>
                                </Box>
                            
                            </Box>
                        )
                    })
                    :null}
                </Grid>

            </Grid>
        </Container>
    )
}

export default Dashboard
