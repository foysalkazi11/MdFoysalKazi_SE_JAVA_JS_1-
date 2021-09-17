import React from 'react';
import {Container,Grid,TextField,Box,Typography, Button,MenuItem} from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
import {useDispatch} from 'react-redux';
import {createProduct} from '../redux/slice/productSlice'

const CreateProduct = () => {
    const dispatch = useDispatch()
    const defaultValues ={
        name:"",
        price:"",
        profitPercentage:"",
        productType:""
    }

    const options =[
        {
            label:"Ram",
            value:"ram"
        },
        {
            label:"Motherboard",
            value:"motherboard"
        },
        {
            label:"Graphics card",
            value:"graphicsCard"
        },
    ]
    //create new product 
    const onSubmit =(data)=>{ 
        dispatch(createProduct(data))

        reset(defaultValues)
    }
    const { handleSubmit, control, reset,formState: { errors } } = useForm({defaultValues});
    
    return (
        <Container maxWidth="md">
            <Grid container>
                <Grid item xs={12}>
                    <Box py={2}>
                    <Typography variant="h6">Create new product</Typography>
                    </Box>
                </Grid>
                
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container item xs={12} spacing={2} >
                    <Grid item xs={12} sm={6}>
                    <Controller
                    render={({ field }) => <TextField 
                    {...field}
                    fullWidth
                    label="Name" 
                    variant="outlined"
                    size="small"
                    type="text"
                    error={errors?.name ? true : false}
                    helperText={errors?.name ? errors?.name?.message : null}
                    
                     />}
                    name="name"
                    control={control}
                    rules={{ required: "Product name requierd" }}

                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Controller
                    render={({ field }) => <TextField 
                    {...field}
                    fullWidth
                    label="Price" 
                    variant="outlined"
                    size="small"
                    type="number"
                    error={errors?.price ? true : false}
                    helperText={errors?.price ? errors?.price?.message : null}
                     />}
                     rules={{ required: "Product price required" }}
                    name="price"
                    control={control}
                    
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Controller
                    render={({ field }) => <TextField 
                    {...field}
                    fullWidth
                    label="Profit percentage" 
                    variant="outlined"
                    size="small"
                    type="number"
                    error={errors?.profitPercentage ? true : false}
                    helperText={errors?.profitPercentage ? errors?.profitPercentage?.message : null}
                     />}
                     rules={{ required: "Product profit percentage required" }}
                    name="profitPercentage"
                    control={control}
                    
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
            <Controller
              render={({field})=>(
                <TextField
                {...field}
                select
              label="Product type"
              fullWidth
                variant="outlined"
                size="small"
                error={errors.productType ? true : false}
              helperText={errors.productType ? errors.productType?.message : null}
                >
                    <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                  {options?.map((option, index) => {
                    return (
                      <MenuItem value={option?.value} key={index}>
                        {option?.label}
                      </MenuItem>
                    );
                  })}
                </TextField>
              )
                
              }
              control={control}
              name="productType"
              rules={{ required: "please select an option" }}
              
            />
          </Grid>
                    {/* <Grid item xs={12} sm={6}>
                    <Controller
                    render={({ field }) => <TextField 
                    {...field}
                    fullWidth
                    label="Product type" 
                    variant="outlined"
                    size="small"
                    type="text"
                    error={errors?.productType ? true : false}
                    helperText={errors?.productType ? errors?.productType?.message : null}
                    
                     />}
                    name="productType"
                    control={control}
                    rules={{ required: "Product product type requierd" }}
                    
                    
                    />
                    </Grid> */}
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary"> Create</Button>
                    </Grid>
                </Grid>
                    </form>
                

            </Grid>
            
        </Container>
    )
}

export default CreateProduct
