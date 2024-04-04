import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { productService } from "./productService";


export const getAllProducts = createAsyncThunk("product/get",
async(thunkAPI)=>{
    try {
        return await productService.getProducts()
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const addToWishlist = createAsyncThunk("product/wishlist ",
async(prodId,thunkAPI)=>{
    try {
        return await productService.addToWishlist(prodId)
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
 

const productState = {
    product:"",
    isError : false,
    isSuccess : false,
    isLoading : false,
    message : ""

}


export const productSlice = createSlice({
    name :"product", //name of the slice
    initialState:productState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProducts.pending,(state)=>{
            state.isLoading=true;
            // if promise is pending isLoading is true
        }).addCase(getAllProducts.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product = action.payload;
        }).addCase(getAllProducts.rejected, (state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(addToWishlist.pending, (state)=>{
            state.isLoading = true;

        }).addCase(addToWishlist.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.addToWishlist = action.payload;
            state.message = "Product added to Wishlist !"
        }).addCase(addToWishlist.rejected, (state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        });

    },

}); 

export default productSlice.reducer;