import React from 'react'
import Breadcrum from '../components/Breadcrum'

import prod1 from "../images/watch.jpg";
import prod2 from "../images/prod2.jpg";
import prod3 from "../images/prod3.jpg";
import prod4 from "../images/prod4.jpg";
import cross from "../images/cross.png"
import Color from '../components/Color';

const CompareProduct = () => {
    return (
        <>
            <Breadcrum title='Compare Products' />
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
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand:</h5>
                                            <p>Titan</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            </div>

                                        </div>
                                        
                                        <div className='product-details'>
                                            <h5>SKU:</h5>
                                            <p>SKU053</p>
                                        </div>
                                    </div>
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
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand:</h5>
                                            <p>Titan</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            </div>

                                        </div>
                                        
                                        <div className='product-details'>
                                            <h5>SKU:</h5>
                                            <p>SKU053</p>
                                        </div>
                                    </div>
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
                                    <div>
                                        <div className='product-details'>
                                            <h5>Brand:</h5>
                                            <p>Titan</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                        <div className='product-details'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            </div>

                                        </div>
                                        
                                        <div className='product-details'>
                                            <h5>SKU:</h5>
                                            <p>SKU053</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>

            </div>
        </>
    )
}

export default CompareProduct
