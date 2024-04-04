import React, { useEffect } from 'react'
import Breadcrum from '../components/Breadcrum'

import prod1 from "../images/watch.jpg";
import prod2 from "../images/prod2.jpg";
import prod3 from "../images/prod3.jpg";
import prod4 from "../images/prod4.jpg";
import cross from "../images/cross.png"
import { useDispatch, useSelector } from 'react-redux';
import { getUserProductWishlist } from '../features/user/userSlice';
import { addToWishlist } from '../features/products/productSlice';
import { toast } from 'react-toastify';

const Wishlist = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getWishlistofUser();
    }, []);
    const getWishlistofUser = () => {
        dispatch(getUserProductWishlist());
    }
    const wishlistState = useSelector((state) => state.auth?.wishlist?.wishlist || []);
    const removeFromWishlist = (id) =>{
        dispatch(addToWishlist(id));
        toast.info('Product removed from wishlist');
        setTimeout(()=>{
            dispatch(getUserProductWishlist());
        },300);
    }
    return (
        <>
            <Breadcrum title='Wishlist' />
            <div className='wishlist-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        {
                            wishlistState?.map((item, index) => {
                                return (
                                    <div className='col-3' key={index}>
                                        <div className='compare-product-card position-relative'>
                                            <img src={cross}
                                            onClick={()=>{
                                                removeFromWishlist(item?._id)
                                            }}
                                             className='position-absolute cross img-fluid' alt='cross' />
                                            <div className='compare-product-image mb-3'>
                                                <img src={prod1} alt='compared-product' />
                                            </div>
                                            <div className='compare-product-details'>
                                                <h5 className='title'>{item?.title}</h5>
                                                <h6 className='price mt-3 mb-3'>${item?.price}</h6>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }


                    </div>
                </div>
            </div>


        </>
    )
}

export default Wishlist
