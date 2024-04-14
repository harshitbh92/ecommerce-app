import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

const handleAxiosError = (error) => {
  return {
      message: error.message,
      code: error.code,
      status: error.response ? error.response.status : null,
      data: error.response ? error.response.data : null,
  };
};

export const registerUser = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
  try {
    return await authService.register(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const loginUser = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
  try {
    return await authService.login(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const getUserProductWishlist = createAsyncThunk("auth/wishlist", async (thunkAPI) => {
  try {
    return await authService.getUserWishlist();
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const addProdToCart = createAsyncThunk("auth/cart/add", async (cartData, thunkAPI) => {
  try {
    return await authService.addToCart(cartData);
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const getUserCart = createAsyncThunk("auth/cart/get", async ( thunkAPI) => {
  try {
    return await authService.getCart();
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const deteleCartProduct = createAsyncThunk("auth/cart/delete/product", async ( cartId,thunkAPI) => {
  try {
    return await authService.removeProductfromCart(cartId);
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const updateCartProduct = createAsyncThunk("auth/cart/update/product", async ( cartDetail,thunkAPI) => {
  try {
    return await authService.updateProductfromCart(cartDetail);
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

const getCustomerFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const initialState = {
  user: getCustomerFromLocalStorage,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
        if (state.isSuccess === true) {
          toast.info("User Created Successfully");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        if (state.isError === true) {
          toast.error(action.payload.data.message);
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess === true) {
          toast.info("User Logged in Successfully");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        if (state.isError === true) {
          toast.error(action.payload.data.message);
        }
      })
      .addCase(getUserProductWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProductWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.wishlist = action.payload;
      })
      .addCase(getUserProductWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      }).addCase(addProdToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProdToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartProduct = action.payload;
        if (state.isSuccess === true) {
          toast.info("Added To Cart");
        }
      })
      .addCase(addProdToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        if (state.isError === true) {
          toast.error(action.payload.data.message);
        }
      }).addCase(getUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartProducts = action.payload;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        if (state.isError === true) {
          toast.error(action.payload);
        }
      }).addCase(deteleCartProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deteleCartProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedCartProduct = action.payload;
        if (state.isSuccess === true) {
          toast.info("Product removed from Cart");
        }
      })
      .addCase(deteleCartProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        if (state.isError === true) {
          toast.error("Something went wrong!");
        }
      }).addCase(updateCartProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCartProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedCartProduct = action.payload;
      })
      .addCase(updateCartProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        if (state.isError === true) {
          toast.error("Something went wrong!");
        }
      })

  },
});

export default authSlice.reducer;
