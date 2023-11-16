import { createSlice } from "@reduxjs/toolkit";

const productSlice= createSlice({

    name: 'product',
    initialState:{
        product: null
    },
    reducers:{
        setProduct:(state,action)=>{
            state.user=action.payload;
        },
    },
});

export const {setProduct}=productSlice.actions;
export default productSlice.reducer;