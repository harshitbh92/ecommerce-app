import React from 'react'
import Breadcrum from '../components/Breadcrum'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

import headphones from "../images/headphone.jpg"
import prod6 from "../images/prod6.jpg"

const Cart = () => {
    return (
        <>
            <Breadcrum title='Cart' />
            <div className='cart-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='cart-header  py-3 d-flex align-items-center justify-content-between'>
                                <h4 className='cart-col-1'>Product</h4>
                                <h4 className='cart-col-2'>Price</h4>
                                <h4 className='cart-col-3'>Quantity</h4>
                                <h4 className='cart-col-4'>Total</h4>
                            </div>
                            <div className='cart-data py-3 d-flex justify-content-between align-items-center'>
                                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                    <div className='w-15'>
                                        <img src={headphones} alt='product-image'/>
                                    </div>
                                    <div className='w-75'>
                                        <h5 className='title'>Kids watch bulk 10 items pack multi colored</h5>
                                        <p className='color'>Color : #ffd700</p>
                                        <p className='size'>Size : M</p>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                      <h5 className='price'>$100</h5>
                                </div>
                                <div className='cart-col-3 d-flex align-items-center gap-15'>
                                    <div>
                                        <input className='form-control' 
                                        type='number' 
                                        name='' 
                                        id=''
                                        min={1}
                                        max={10}
                                        />
                                    </div>
                                    <div>
                                    <MdDelete />
                                    </div>
                                </div>
                                <div className='cart-col-4'>
                                    <h5 className='price'>$100</h5>
                                </div>
                            </div>
                            <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                    <div className='w-15'>
                                        <img src={prod6} className='img-fluid' alt='product-image'/>
                                    </div>
                                    <div className='w-75'>
                                        <h5 className='title'>Kids watch bulk 10 items pack multi colored</h5>
                                        <p className='color'>Color : #ffd700</p>
                                        <p className='size'>Size : M</p>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                      <h5 className='price'>$169</h5>
                                </div>
                                <div className='cart-col-3 d-flex align-items-center gap-15'>
                                    <div>
                                        <input className='form-control' 
                                        type='number' 
                                        name='' 
                                        id=''
                                        min={1}
                                        max={10}
                                        />
                                    </div>
                                    <div>
                                    <MdDelete />
                                    </div>
                                </div>
                                <div className='cart-col-4'>
                                    <h5 className='price'>$169</h5>
                                </div>
                            </div>
                        </div>
                        <div className='cart-pay-wrapper col-12 py-2 mt-4'>
                           <div className='d-flex justify-content-between align-items-baseline'>
                           <Link to='/store' className='button'>Continue Shopping</Link>
                           <div className='d-flex flex-column gap-10 align-items-center'>
                            <h4>Subtotal : $269</h4>
                            <p>Shipping Cost and Taxes calculated at next step</p>
                            <Link to='/checkout' className='button'>Proceed to Checkout</Link>
                           </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart
