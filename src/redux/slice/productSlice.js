import {createSlice} from '@reduxjs/toolkit';
const productList = [
    {   id:1,
        name:"Silicon Power 4GB DDR4 2400 Bus RAM",
        price:2400,
        profitPercentage: 3,
        productType:"ram"
    },
    {   id:2,
        name:"Patriot 4GB DDR3 1600 Bus Desktop Ram",
        price:2100,
        profitPercentage: 2,
        productType:"ram"
    },
    {   id:3,
        name:"TwinMOS 4GB DDR3 1600MHz",
        price:2200,
        profitPercentage: 4,
        productType:"ram"
    },
    {   id:4,
        name:"Patriot 4GB DDR3 1333MHz Desktop RAM",
        price:2200,
        profitPercentage: 5,
        productType:"ram"
    },
    {   id:5,
        name:"GIGABYTE GA-F2A68HM-DS2 Ultra Durable 4 Plus AMD FM2 Socket Motherboard",
        price:4500,
        profitPercentage: 5,
        productType:"motherboard"
    },
    {   id:6,
        name:"MSI A320M-A Pro Max AMD Motherboard",
        price:5700,
        profitPercentage: 4,
        productType:"motherboard"
    },
    {   id:7,
        name:"MSI A320M-A Pro AMD Micro-ATX Motherboard",
        price:5700,
        profitPercentage: 3,
        productType:"motherboard"
    },
    {   id:8,
        name:"Gigabyte GA-A320M-S2H AMD Micro ATX Motherboard",
        price:5900,
        profitPercentage: 4,
        productType:"motherboard"
    },
    {   id:9,
        name:"Gigabyte GT 710 2GB DDR3 Graphics Card",
        price:5700,
        profitPercentage: 4,
        productType:"graphics Card"
    },
    {   id:10,
        name:"Asus GeForce GT 710 2GB DDR5 Graphics Card",
        price:5800,
        profitPercentage: 3,
        productType:"graphics Card"
    },
    {   id:11,
        name:"Zotac GeForce GT 710 2GB DDR3 Graphics Card",
        price:6200,
        profitPercentage: 4,
        productType:"graphics Card"
    },
    {   id:12,
        name:"MSI GT 710 2GD3H LP 2GB DDR3 Gaming Graphic Card",
        price:6300,
        profitPercentage: 6,
        productType:"graphics Card"
    },
    
]


export const productSlice = createSlice({
    name:"product",
    initialState:{
        productList:[...productList]
    },
    reducers:{
        deleteProduct: (state,action)=>{
            
            state.productList = state.productList?.filter(item => item?.id !== action?.payload?.id)
        }
    }
})

export const {deleteProduct} = productSlice.actions
export default productSlice.reducer