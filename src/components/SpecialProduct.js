import React from 'react'
import ReactStars from "react-rating-stars-component";
// import { useTimer } from 'react-timer-hook';
import ProgressBar from "@ramonak/react-progress-bar";

import headphone from "../images/headphone.jpg"
import headphone2 from "../images/headphone2.jpeg"

import { Link } from 'react-router-dom';
const SpecialProduct = () => {
  return (
    <div className='col-4'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div className='special-img '>
                    <img src={headphone} className='img-fluid' alt='special-product-1'/>
                    <div className='side-img d-flex '>
                            <div className='img1 img-fluid'>
                                <img src={headphone}  alt='special-product-1' />
                            </div>
                            <div className='img2 img-fluid'>
                                <img src={headphone2}  alt='special-product-1' />
                            </div>
                        </div>
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
                        <div><span className='actual-price '>$100.00</span></div>
                        <div><strike>$410</strike></div>
                    </p>
                    <div className='discount-till d-flex align-items-center gap-10'>
                        <p className='mb-0'>
                            <b>5</b> days
                        </p>
                        <span className='badge rounded-circle p-3 bg-danger'>24</span>:
                        <span className='badge rounded-circle p-3 bg-danger'>11</span>:
                        <span className='badge rounded-circle p-3 bg-danger'>50</span>
                    </div>
                    <div className='prod-count my-3'>
                        <p>Products : 104</p>
                        <div class="progress">
                            <div className="progress-bar" 
                                role="progressbar" 
                                style={{width: '25%'}} 
                                aria-valuenow="25" 
                                aria-valuemin="0" 
                                aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <Link className='button mb-2'>Add to Cart</Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct
