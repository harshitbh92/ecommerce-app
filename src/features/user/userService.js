 import axios from "axios"
import { base_url } from "../../utils/axiosconfig";
const register = async(userData)=>{
    const response  = await axios.post('http://localhost:5000/api/user/register',userData);//""->url,userData
    if(response.data)
    {
        return response.data;
    }
}
const login = async(userData)=>{
    const response  = await axios.post(`${base_url}user/login`,userData);//""->url,userData
    if(response.data)
    {
        return response.data;
    }
}

export const authService ={
    register,
    login,
}