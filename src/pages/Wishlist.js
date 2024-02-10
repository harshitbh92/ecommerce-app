import React from 'react'
import Breadcrum from '../components/Breadcrum'

import prod1 from "../images/watch.jpg";
import cross from "../images/cross.png"
import Color from '../components/Color';

const Wishlist = () => {
    return (
        <>
            <Breadcrum title='Wishlist' />
            <div className='compare-product-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src={cross} className='position-absolute cross img-fluid' alt='cross' />
                                <div className='compare-product-image'>
                                    <img src={prod1} alt='compared-product' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>ZEBRONICS Zeb-Dynamic Wireless Headphones with 34 hrs. of Playback time.(Yellow)</h5>
                                    <h6 className='price mt-3 mb-3'>$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src={cross} className='position-absolute cross img-fluid' alt='cross' />
                                <div className='compare-product-image'>
                                    <img src={prod1} alt='compared-product' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>ZEBRONICS Zeb-Dynamic Wireless Headphones with 34 hrs. of Playback time.(Yellow)</h5>
                                    <h6 className='price mt-3 mb-3'>$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src={cross} className='position-absolute cross img-fluid' alt='cross' />
                                <div className='compare-product-image'>
                                    <img src={prod1} alt='compared-product' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>ZEBRONICS Zeb-Dynamic Wireless Headphones with 34 hrs. of Playback time.(Yellow)</h5>
                                    <h6 className='price mt-3 mb-3'>$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src={cross} className='position-absolute cross img-fluid' alt='cross' />
                                <div className='compare-product-image'>
                                    <img src={prod1} alt='compared-product' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>ZEBRONICS Zeb-Dynamic Wireless Headphones with 34 hrs. of Playback time.(Yellow)</h5>
                                    <h6 className='price mt-3 mb-3'>$100</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Wishlist
