import React, { useState } from 'react'
import Breadcrum from '../components/Breadcrum'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { IoArrowForward } from "react-icons/io5";
// import ReactImageZoom from 'react-image-zoom';
import ReactImageMagnify from 'react-image-magnify';

import prod1 from "../images/watch.jpg";
import prod2 from "../images/prod2.jpg";
import prod3 from "../images/prod3.jpg";
import prod4 from "../images/prod4.jpg";
import prod5 from "../images/prod5.jpg";
import prod6 from "../images/prod6.jpg";
import cart from "../images/cart.png";
import compare from '../images/compare.png'
import view from "../images/view.png"
import wishlist from "../images/wishlist.png"
import mainprod1 from "../images/main-prod1.png"
import mainprod2 from "../images/main-prod2.png"
import mainprod3 from "../images/main-prod3.png"
import mainprod4 from "../images/main-prod4.png"
import mainprod5 from "../images/main-prod5.png"
import mainprod6 from "../images/main-prod6.png"
import MainSlider from '../components/MainSlider';
import Color from '../components/Color';



const SingleProduct = () => {

    const props = { width: 400, height: 250, zoomWidth: 500, img: "data:image/jpeg;base64,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" };
    const { orderedProduct, setOrderedProduct } = useState(false);
    // if useState(false) => user is not logged in and not bought the product so can't write a review
    // if useState(true) => user is logged in and has bought the product so can write a review
    return (
        <>
            <Breadcrum title='Product Name' />
            <div className='main-product-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-1 bg-white'>
                            <div className='side-images d-flex flex-column gap-10 py-2'>
                                <div>
                                    <img className='img-fluid mt-4' src={mainprod1} alt="main-prod-1" />
                                </div>
                                <div>
                                    <img className='img-fluid' src={mainprod2} alt="main-prod-1" />
                                </div>
                                <div>
                                    <img className='img-fluid' src={mainprod3} alt="main-prod-1" />
                                </div>
                                <div>
                                    <img className='img-fluid' src={mainprod4} alt="main-prod-1" />
                                </div>
                                <div>
                                    <img className='img-fluid' src={mainprod5} alt="main-prod-1" />
                                </div>
                                <div>
                                    <img className='img-fluid' src={mainprod6} alt="main-prod-1" />
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='main-product-image py-5'>
                                {/* <div>
                                    <img src={mainprod4} alt='main-product' />
                                </div> */}
                                {/* <div className='main-img'>
                                <div>
                                    <img className='img-fluid mt-4' src={mainprod1} alt="main-prod-1" />
                                </div>
                                <div>
                                    <img className='img-fluid' src={mainprod2} alt="main-prod-1" />
                                </div>
                                <div>
                                    <img className='img-fluid' src={mainprod3} alt="main-prod-1" />
                                </div>
                                <div>
                                    <img className='img-fluid' src={mainprod4} alt="main-prod-1" />
                                </div>
                                <div>
                                    <img className='img-fluid' src={mainprod5} alt="main-prod-1" />
                                </div>
                                <div>
                                    <img className='img-fluid' src={mainprod6} alt="main-prod-1" />
                                </div>
                                </div> */}
                                <MainSlider />


                            </div>
                        </div>
                        <div className='col-5 bg-white py-2 main-product-details'>
                            <div className='top-prod'>
                                <div className='d-flex gap-10 align-items-center mb-3'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value='4'
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='review-count mb-0'>Based on 42 reviews</p>
                                </div>
                                <div className='title mb-3'>
                                    <h4>boAt Nirvana 751 ANC Hybrid</h4>
                                </div>
                                <div className='main-price mb-3'>
                                    <h5>$80.00</h5>
                                </div>
                                <div className='product-description border-bottom'>
                                    <p>boAt Nirvana 751 ANC Hybrid Active Noise Cancelling Bluetooth Wireless Over Ear Headphones with Up to 65H Playtime, ASAP Charge, Ambient Sound Mode, Immersive Sound, Carry Pouch(Silver Sterling)</p>
                                </div>
                            </div>
                            <div className='med-prod mb-3'>
                                <p className='pt-3'>Availability : In Stock</p>
                                <p>Brand : Boat</p>
                                <p>SKU : SKU124</p>
                                <p>Tags: </p>
                                <div className='product-tags d-flex flex-wrap align-items-center gap-10 mb-3'>
                                    <span className='badge bg-light text-secondary rounded-3 px-2'>Headphones</span>
                                    <span className='badge bg-light text-secondary rounded-3 px-2'>TV</span>
                                    <span className='badge bg-light text-secondary rounded-3 px-2'>Watch</span>
                                    <span className='badge bg-light text-secondary rounded-3 px-2'>Shoes</span>
                                    <span className='badge bg-light text-secondary rounded-3 px-2'>Mobiles</span>
                                    <span className='badge bg-light text-secondary rounded-3 px-2'>Tablet</span>
                                    <span className='badge bg-light text-secondary rounded-3 px-2'>Laptops</span>
                                </div>
                                <div className='product-details'>
                                    <h5>Size:</h5>
                                    <div className='d-flex gap-10'>
                                        <p>S</p>
                                        <p>M</p>
                                        <p>L</p>
                                    </div>

                                </div>
                                <div className='product-details mb-3'>
                                    <h5>Color:</h5>
                                    <Color />
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='mb-0'>Quantity : </p>
                                    <div>
                                        <input className='form-control'
                                            type='number'
                                            name=''
                                            id=''
                                            value='1'
                                            min={1}
                                            max={10}
                                        />
                                    </div>
                                    <Link to='/checkout' className='button'>Add to Cart</Link>
                                    <Link to='/signup' className='button buynow'>Buy Now</Link>
                                </div>
                                <div className='end-prod'>
                                    <div className='d-flex align-items-center justify-content-between mt-3'>
                                        <div className='d-flex align-item-center gap-1'>
                                            <Link>
                                                <img className='wishlist-img' src={wishlist} alt='wishlist' />
                                            </Link>
                                            <Link className='text-dark'>
                                                <p>Add to Wishlist</p>
                                            </Link>
                                        </div>
                                        <div className='d-flex align-item-center gap-1'>
                                            <Link>
                                                <img className='wishlist-img' src={compare} alt='compare' />
                                            </Link>
                                            <Link className='text-dark'>
                                                <p>Compare this product</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <section className='description-wrapper main-product-wrapper py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12 bg--white'>
                            <div className='bg-white p-3'>
                                <h4>About this item</h4>
                                <p className='bg-white p-3'>
                                    <ul>
                                        <li>The perfect way to add some style and stand out from the crowd with the boAt BassHeads 100 "Hawk" inspired earphones</li>
                                        <li>The stylish BassHeads 100 superior coated wired earphones are a definite fashion statement - wear your attitude with its wide variety of collection</li>
                                        <li>The powerful 10mm dynamic driver with the speaker resistance of 16 ohm enables the earphone to deliver a punchy, rhythmic response to the most demanding tracks</li>
                                        <li>With 1.2 meters perfect length cable now plug it in anywhere with ease - while the earphones are extremely user-friendly and stylish, extruding premium coating on the wire cable is a manufacturing process that we've been performing and refining since our company's inception</li>
                                        <li>1 year warranty from the date of purchase</li>
                                    </ul></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='review-wrapper main-product-wrapper py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12 bg-white p-3'>
                            <div className='review-head d-flex justify-content-between'>
                                <div>
                                    <h4>Customer reviews</h4>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value='3.5'
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='review-count mb-0'>Based on 42 reviews</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap'>
                                    <Link to='' className='text-dark fs-5' >Write a review</Link>
                                    <IoArrowForward />
                                </div>
                                {/* {orderedProduct && (
                                    <div>
                                    {/* <Link to='' className='text-dark' >Write a review</Link> */}
                                {/* <a href='' >Write a</a>
                                </div>
                                )} */}
                            </div>
                            <div className='review-form py-5'>
                                <h4 className='mb-3'>Write a review</h4>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type='text' className='form-control' placeholder='Review Title' />
                                    </div>

                                    <div className='d-flex align-items-center gap-15'>
                                        <div>
                                            <h4>Rate the Product : </h4>
                                        </div>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value='3.5'
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <textarea className='w-100 form-control'
                                            name='' id='' cols="30" rows="6" placeholder='Enter Your Text'>
                                        </textarea>
                                    </div>
                                    <div class="form-group">
                                        <h4 className='add-photo'>Add a photo (optional)</h4>
                                        <div class="fileupload">
                                            <input type="file" name="fileupload" accept="image/*" /></div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='button'>Submit review</button>
                                    </div>
                                </form>
                            </div>
                            <div className='reviews py-5'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h4>Product Reviews</h4>
                                    </div>
                                    <div className='d-flex align-items-center gap'>
                                        <Link to='' className='text-dark fs-5' >See all reviews</Link>
                                        <IoArrowForward />
                                    </div>
                                </div>
                            </div>

                            <div className='p-3 single-review'>
                                <div className=' gap-5 align-items-center'>
                                    <h5>"Awesome Experience"</h5>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value='3.5'
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                </div>
                                <p className='text-dark fs-6'>Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et.</p>
                                <h6 className='mb-0 p-2'><b>- Harshit Bhatnagar</b></h6>
                                <p className='date-review'>Posted on : 16 Jan 2024</p>
                            </div>
                            <div className='p-3 single-review'>
                                <div className=' gap-5 align-items-center'>
                                    <h5>"Awesome Experience"</h5>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value='3.5'
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                </div>
                                <p className='text-dark fs-6'>Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et.</p>
                                <h6 className='mb-0 p-2'><b>- Harshit Bhatnagar</b></h6>
                                <p className='date-review'>Posted on : 16 Jan 2024</p>
                            </div>
                        </div>
                        <div className='align-items-end'>

                        </div>
                    </div>
                </div>
            </section>
            <section className='featured-collection py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12  align-items-center'>
                            <h3 className='section-heading'>You May Also Like</h3>
                        </div>

                        <div className='col-2'>
                            <div className='product-card position-relative'>
                                <div className='wishlist-icon position-absolute'>
                                    <Link>
                                        <img src={wishlist} alt='wishlist' />
                                    </Link>
                                </div>
                                <div className='prod-image'>
                                    <img src={prod1} className='prod-img img-fluid' alt='product-image' />
                                    {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                                </div>
                                <div className='prod-details'>
                                    <h6 className='brand-name'>Titan</h6>
                                    <h5 className='product-title'>
                                        Kids watch bulk 10 items pack multi colored
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value='3.5'
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='price'>$100.00</p>
                                </div>
                                <div className='action-bar position-absolute'>
                                    <div className='d-flex flex-column gap-10'>
                                        <Link>
                                            <img src={compare} alt='compare products' />
                                        </Link>
                                        <Link>
                                            <img src={view} alt='view product' />
                                        </Link>
                                        <Link>
                                            <img src={cart} alt='add to cart' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='product-card position-relative'>
                                <div className='wishlist-icon position-absolute'>
                                    <Link>
                                        <img src={wishlist} alt='wishlist' />
                                    </Link>
                                </div>
                                <div className='prod-image'>
                                    <img src={prod2} className='img-fluid' alt='product-image' />
                                </div>
                                <div className='prod-details'>
                                    <h6 className='brand-name'>Titan</h6>
                                    <h5 className='product-title'>
                                        Kids watch bulk 10 items pack multi colored
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value='3.5'
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='price'>$100.00</p>
                                </div>
                                <div className='action-bar position-absolute'>
                                    <div className='d-flex flex-column gap-10'>
                                        <Link>
                                            <img src={compare} alt='compare products' />
                                        </Link>
                                        <Link>
                                            <img src={view} alt='view product' />
                                        </Link>
                                        <Link>
                                            <img src={cart} alt='add to cart' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='product-card position-relative'>
                                <div className='wishlist-icon position-absolute'>
                                    <Link>
                                        <img src={wishlist} alt='wishlist' />
                                    </Link>
                                </div>
                                <div className='prod-image'>
                                    <img src={prod3} className='img-fluid' alt='product-image' />
                                </div>
                                <div className='prod-details'>
                                    <h6 className='brand-name'>Titan</h6>
                                    <h5 className='product-title'>
                                        Kids watch bulk 10 items pack multi colored
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value='3.5'
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='price'>$100.00</p>
                                </div>
                                <div className='action-bar position-absolute'>
                                    <div className='d-flex flex-column gap-10'>
                                        <Link>
                                            <img src={compare} alt='compare products' />
                                        </Link>
                                        <Link>
                                            <img src={view} alt='view product' />
                                        </Link>
                                        <Link>
                                            <img src={cart} alt='add to cart' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='product-card position-relative'>
                                <div className='wishlist-icon position-absolute'>
                                    <Link>
                                        <img src={wishlist} alt='wishlist' />
                                    </Link>
                                </div>
                                <div className='prod-image'>
                                    <img src={prod4} className='img-fluid' alt='product-image' />
                                </div>
                                <div className='prod-details'>
                                    <h6 className='brand-name'>Titan</h6>
                                    <h5 className='product-title'>
                                        Kids watch bulk 10 items pack multi colored
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value='3.5'
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='price'>$100.00</p>
                                </div>
                                <div className='action-bar position-absolute'>
                                    <div className='d-flex flex-column gap-10'>
                                        <Link>
                                            <img src={compare} alt='compare products' />
                                        </Link>
                                        <Link>
                                            <img src={view} alt='view product' />
                                        </Link>
                                        <Link>
                                            <img src={cart} alt='add to cart' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='product-card position-relative'>
                                <div className='wishlist-icon position-absolute'>
                                    <Link>
                                        <img src={wishlist} alt='wishlist' />
                                    </Link>
                                </div>
                                <div className='prod-image'>
                                    <img src={prod5} className='img-fluid' alt='product-image' />
                                </div>
                                <div className='prod-details'>
                                    <h6 className='brand-name'>Titan</h6>
                                    <h5 className='product-title'>
                                        Kids watch bulk 10 items pack multi colored
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value='3.5'
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='price'>$100.00</p>
                                </div>
                                <div className='action-bar position-absolute'>
                                    <div className='d-flex flex-column gap-10'>
                                        <Link>
                                            <img src={compare} alt='compare products' />
                                        </Link>
                                        <Link>
                                            <img src={view} alt='view product' />
                                        </Link>
                                        <Link>
                                            <img src={cart} alt='add to cart' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='product-card position-relative'>
                                <div className='wishlist-icon position-absolute'>
                                    <Link>
                                        <img src={wishlist} alt='wishlist' />
                                    </Link>
                                </div>
                                <div className='prod-image'>
                                    <img src={prod6} className='img-fluid' alt='product-image' />
                                </div>
                                <div className='prod-details'>
                                    <h6 className='brand-name'>Titan</h6>
                                    <h5 className='product-title'>
                                        Kids watch bulk 10 items pack multi colored
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value='3.5'
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='price'>$100.00</p>
                                </div>
                                <div className='action-bar position-absolute'>
                                    <div className='d-flex flex-column gap-10'>
                                        <Link>
                                            <img src={compare} alt='compare products' />
                                        </Link>
                                        <Link>
                                            <img src={view} alt='view product' />
                                        </Link>
                                        <Link>
                                            <img src={cart} alt='add to cart' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SingleProduct
