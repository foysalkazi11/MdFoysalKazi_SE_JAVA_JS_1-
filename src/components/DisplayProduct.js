import React,{useState,useEffect} from 'react';
import {Container,Box,Typography,Grid,makeStyles,Tooltip} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {deleteProduct} from '../redux/slice/productSlice';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

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
    },
    emptyProductBox:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        paddingTop:100
    },
    productName:{
        width:"100%",
        whiteSpace:"nowrap",
        overflow:"hidden",
        textOverflow:"ellipsis"
    }
}))

const ShowProduct = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const {productList} = useSelector(state => state.product);
    const {userInfo} = useSelector(state => state.user);
    const [pagination,setPagination] = useState([])
    const [activePage, setActivePage] = useState(1);

    const total = Math.ceil(productList.length / 5);

  const handleChangePage = (event, newPage=1) => { // calculate pagination product
    const newArray =  productList.slice((newPage - 1) * 5, newPage * 5 );
    setPagination(newArray)
    setActivePage(newPage);
    
  };

  useEffect(() => {
    handleChangePage()
  }, [productList])
    

    const removeProduct = (id)=>{ // delete one product from prodct list
        dispatch(deleteProduct({id}))
    }
    return (
        <Container maxWidth="md">
            <Grid container>
                <Grid item xs={12}>
                    {productList?.length ?
                    <Box pb={2}>
                    <Typography variant="h6">All products</Typography>
                </Box>
                    :null}
                </Grid>
                <Grid container item xs={12} spacing={2}>
                    {pagination.length ?
                    pagination?.map((item,index)=>{
                        return(
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box display='flex' flexDirection="column" p={1} className={classes.productContainer}>
                                    <Box  className={classes.imageBox}>
                                        <Typography variant="h6">Image</Typography>
                                    </Box>
                                    <Box  display="flex" flexDirection="column">
                                        <Box pb={1}>
                                        <Typography className={classes.productName}>{item?.name}</Typography>
                                        </Box>
                                        <Box display="flex" alignItems="center" justifyContent="space-between">
                                        <Typography>{item?.price} TK</Typography>
                                        <Box display="flex" alignItems="center">
                                            <Box pr={2}>
                                                <Link to={`/updateProduct/${item?.id}`}>
                                                <Tooltip title="Edit product" arrow>
                                                <EditIcon fontSize="small" />
                                                </Tooltip>
                                                </Link>
                                            </Box>
                                        {userInfo?.email ?
                                        <Tooltip title="Delete product" arrow>
                                        <DeleteOutlineIcon fontSize="small"  className={classes.deleteIcon} onClick={()=> removeProduct(item?.id)} />
                                        </Tooltip>
                                        :
                                        <Link to="/login">
                                        <Tooltip title="Delete product" arrow>
                                        <DeleteOutlineIcon fontSize="small"  className={classes.deleteIcon} />
                                        </Tooltip>
                                        </Link>
                                        }
                                        </Box>
                                        
                                        </Box>
                                    </Box>
                                </Box>

                            </Grid>
                        )
                    })
                   :<Box className={classes.emptyProductBox}>
                   <Typography >Product list is empty, please add product</Typography>
               </Box>}
                </Grid>

            </Grid>

            {pagination.length ?
            <Box display="flex" justifyContent="center" pt={3}>
            <Pagination
            count={total}
            onChange={handleChangePage}
            color="primary"
            page={activePage}
             />
        </Box>
             :null}
        
        </Container>
    )
}

export default ShowProduct
