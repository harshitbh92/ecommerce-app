import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { BlogService } from "./blogService";

export const getAllBlogs = createAsyncThunk("blogs/get",async(thunkAPI)=>{
    try {
        return await BlogService.getBlogs()
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const blogState = {
    blog :"",
    isError : false,
    isSuccess : false,
    isLoading : false,
    message : ""
}

export const blogSlice = createSlice({
    name :"blog", //name of the slice
    initialState:blogState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllBlogs.pending,(state)=>{
            state.isLoading=true;
            // if promise is pending isLoading is true
        }).addCase(getAllBlogs.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.blog = action.payload;
        }).addCase(getAllBlogs.rejected, (state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
    }
})

export default  blogSlice.reducer;