import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// import { productService } from "./productService";
import { contactService } from "./contactService";


export const createEnquiry = createAsyncThunk("contact/post",
async(contactData,thunkAPI)=>{
    try {
        return await contactService.postEnquiry(contactData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});  

const contactState = {
    product:"",
    isError : false,
    isSuccess : false,
    isLoading : false,
    message : ""

}


export const contactSlice = createSlice({
    name :"contact", //name of the slice
    initialState:contactState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createEnquiry.pending,(state)=>{
            state.isLoading=true;
            // if promise is pending isLoading is true
        }).addCase(createEnquiry.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.contact = action.payload;
        }).addCase(createEnquiry.rejected, (state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })    
    },

}); 

export default contactSlice.reducer;