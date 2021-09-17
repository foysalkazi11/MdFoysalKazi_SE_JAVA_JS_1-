import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slice/productSlice';
import userReducer from '../slice/userSlice'


export const store = configureStore({
    reducer: {
        product:productReducer,
        user:userReducer
        
    },
  })