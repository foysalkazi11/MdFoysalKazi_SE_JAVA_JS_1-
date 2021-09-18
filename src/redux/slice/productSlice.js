import {createSlice} from '@reduxjs/toolkit';
import productList from '../../utility/productList';

export const productSlice = createSlice({
    name:"product",
    initialState:{
        productList:[...productList]
    },
    reducers:{
        deleteProduct: (state,action)=>{
            
            state.productList = state.productList?.filter(item => item?.id !== action?.payload?.id)
            ?.map((item,index) => ({...item,id:index + 1}))
        },
        createProduct: (state,action)=>{
            state.productList?.push({...action?.payload,id:state.productList?.length + 1})
        },
        updateProduct: (state,action)=>{
            const array = [...JSON.parse(JSON.stringify(state.productList))] // make a new arry form existing array.
            state.productList = array?.map(item =>item?.id === parseInt(action?.payload?.id) ? {...item,...action?.payload,id:parseInt(action?.payload?.id)}:item)
        },

    }
})

export const {deleteProduct,createProduct,updateProduct} = productSlice.actions
export default productSlice.reducer