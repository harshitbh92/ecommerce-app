import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackSharp } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import headphones from "../images/headphone.jpg"
import prod6 from "../images/prod6.jpg"

const Checkout = () => {
    const userCartState = useSelector(state => (state?.auth?.cartProducts));
    const [totalAmount, setTotalAmount] = useState(null);
    const [finalTotal,setFinalTotal] = useState(null);
    useEffect(() => {
        let sum = 0;
        let fsum=0
        for (let index = 0; index < userCartState?.length; index++) {
            sum = sum + (Number(userCartState[index].quantity) * (userCartState[index].price));
            fsum = sum + 50;
            // console.log(sum);
            setTotalAmount(sum);
            setFinalTotal(fsum);
        }
    }, [userCartState]);

    const userState = useSelector(state => state?.auth?.user);

    return (
        <>
            <div className='checkout-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-7 '>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>Digitic</h3>
                                <div className='payment-pages my-2'>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                                            <li className="breadcrumb-item"><Link to='/cart'>Cart</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                                            <li className="breadcrumb-item"><Link to='/checkout'>Shipping</Link></li>
                                            <li className="breadcrumb-item"><Link to='/checkout'>Payment</Link></li>
                                        </ol>
                                    </nav>
                                </div>
                                <h4 className='title mb-3'>Contact Information</h4>
                                <p>{userState?.email}</p>
                                <form action='' className='d-flex flex-wrap gap-10 justify-content-between'>

                                    <div className='flex-grow-1 mb-2'>
                                        <input type='text' className='form-control' placeholder='First Name' />
                                    </div>
                                    <div className='flex-grow-1 mb-2'>
                                        <input type='email' className='form-control' placeholder='Last Name' />
                                    </div>
                                    <div className='w-100 mb-2'>
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Address - Line 1" />
                                    </div>
                                    <div className='w-100 mb-2'>
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Address - Line 2" />
                                    </div>
                                    <div className='flex-grow-1 mb-2'>
                                        <input type='text' className='form-control' placeholder='City' />
                                    </div>
                                    <div className='flex-grow-1 mb-2'>
                                        <select name='' className='form-control form-select'>
                                            <option value="" selected disabled>
                                                Select State
                                            </option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' className='form-control' placeholder='Zip Code' />
                                    </div>
                                    <div className='w-100'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='d-flex align-items-center gap-10'>
                                                <IoArrowBackSharp />
                                                <Link to='/cart' className='text-dark'>Back to Cart</Link>
                                            </div>
                                            <Link to='/shipping' className='button'>Proceed to Shipping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-5 bg-white'>
                            <div className='border-bottom py-4 '>
                                {
                                    userCartState && userCartState?.map((item, index) => {
                                        return (
                                            <div key={index} className='d-flex gap-10 align-items-center justify-content-between mb-3'>
                                                <div className='w-75 d-flex gap-10'>
                                                    <div className='w-25'>
                                                        <span className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>{item?.quantity}</span>

                                                        <img src={item?.productId?.images} className='img-fluid' alt='product-image' />
                                                    </div>
                                                    <div>
                                                        <h5 className='title'>{item?.productId?.title}</h5>
                                                        <p className='d-flex gap-10'>Color :  <ul className='colors ps-0'>
                                                        <li style={{ backgroundColor: item?.color?.title, border: '1px solid black' }}></li> </ul></p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5>${item?.price * item?.quantity}</h5>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                {/* <div className='d-flex gap-10 align-items-center justify-content-between'>
                                    <div className='w-75 d-flex gap-10'>
                                        <div className='w-25 psition relative'>
                                            <span className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                            <img src={prod6} className='img-fluid' alt='product-image' />
                                        </div>
                                        <div>
                                            <h5 className='title'>Kids watch bulk 10 items pack multi colored</h5>
                                            <p>M / #ffd700</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h5>$169</h5>
                                    </div>
                                </div> */}
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p>Subtotal</p>
                                    <p>${totalAmount}</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p>Shipping Cost</p>
                                    <p>$50</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4>Total</h4>
                                <h5>${finalTotal}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
