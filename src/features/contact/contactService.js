import axios from "axios"
import { base_url, config } from "../../utils/axiosconfig";


const postEnquiry = async(contactData)=>{
    const response  = await axios.post(`${base_url}contact/`,{contactData});//""->url,userData
    if(response.data)
    {
        return response.data;
    }
}


export const contactService ={
    postEnquiry,
}