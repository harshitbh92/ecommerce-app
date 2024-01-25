import React from 'react'
import ReactStars from "react-rating-stars-component";


import headphone from "../images/headphone.jpg"
const SpecialProduct = () => {
  return (
    <div className='col-4'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div className='special-img'>
                    <img src={headphone} alt='special-product-1'/>
                </div>
                <div className='special-product-content'>
                    <h5 className='brand'>Boat</h5>
                    <h6 className='product-title'>
                        Rockerz 551ANC <br/>Noise Cancelling Wireless Hea...
                    </h6>
                    <ReactStars
                        count={5}
                        size={24}
                        value='3.5'
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className='price d-flex gap-10'>
                        <div><span className='red '>$100.00</span></div>
                        <div><strike>$410</strike></div>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct
