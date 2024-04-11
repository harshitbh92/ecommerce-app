import axios from "axios"
import { base_url, config } from "../../utils/axiosconfig";


const getProducts = async(userData)=>{
    const response  = await axios.get(`${base_url}product/`);//""->url,userData
    if(response.data)
    {
        return response.data;
    }
}

const getSingleProduct = async(id)=>{
    const response  = await axios.get(`${base_url}product/${id}`);//""->url,userData
    if(response.data)
    {
        return response.data;
    }
}

const getAllReviews = async()=>{
    const response = await axios.get(`${base_url}`)
}

const addToWishlist = async(prodId) =>{
    const response = await axios.put(`${base_url}product/wishlist`,{prodId},config);
    if(response.data)
    {
        return response.data;
    }
}

export const productService ={
    getProducts,
    addToWishlist,
    getSingleProduct,
}