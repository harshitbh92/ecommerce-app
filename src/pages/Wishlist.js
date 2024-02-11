import React from 'react'
import Breadcrum from '../components/Breadcrum'

import prod1 from "../images/watch.jpg";
import prod2 from "../images/prod2.jpg";
import prod3 from "../images/prod3.jpg";
import prod4 from "../images/prod4.jpg";
import cross from "../images/cross.png"

const Wishlist = () => {
    return (
        <>
            <Breadcrum title='Wishlist' />
            <div className='wishlist-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src={cross} className='position-absolute cross img-fluid' alt='cross' />
                                <div className='compare-product-image mb-3'>
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
                                <div className='compare-product-image mb-3'>
                                    <img src={prod2} alt='compared-product' />
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
                                <div className='compare-product-image mb-3'>
                                    <img src={prod3} alt='compared-product' />
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
                                <div className='compare-product-image mb-3'>
                                    <img src={prod4} alt='compared-product' />
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
