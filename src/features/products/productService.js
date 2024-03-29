import axios from "axios"
import { base_url } from "../../utils/axiosconfig";


const getProducts = async(userData)=>{
    const response  = await axios.get(`${base_url}product/`);//""->url,userData
    if(response.data)
    {
        return response.data;
    }
}

export const productService ={
    getProducts,
}