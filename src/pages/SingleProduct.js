import React, { useEffect, useState } from 'react'
import Breadcrum from '../components/Breadcrum'
import { Link, useLocation } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import { IoArrowForward } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import copy from 'copy-to-clipboard';
// import ReactImageZoom from 'react-image-zoom';
// import ReactImageMagnify from 'react-image-magnify';

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
import { getAProduct } from '../features/products/productSlice';
import { toast } from "react-toastify";
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { addProdToCart, getUserCart } from '../features/user/userSlice';



const SingleProduct = () => {

    const [color, setcolor] = useState(null);
    console.log(color);
    const [quantity, setquantity] = useState(1);
    // console.log(quantity);
    const [alreadyAdded, setAlreadyAdded] = useState(false);

    const ReviewSchema = yup.object().shape({
        reviewtitle: yup.string().required("First Name is required"),
        star: yup.string().email("Valid email must be provided").required("Email address is required"),
        comment: yup.string().required("Please write 1-2 sentences"),
    });
    const initialValues = {
        reviewtitle: '',
        star: '',
        comment: ''
    }
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues,
        validationSchema: ReviewSchema,
        onSubmit: (values) => {
            axios.post('http://localhost:5000/api/product/rating', values)
                .then(result => {
                    console.log(result)
                    toast.info("Review posted Successfully");
                    navigate('/product')
                })
                .catch(error => console.log(error))
        },
    });
    const location = useLocation();
    // const navigate = useNavigate();
    const productId = location.pathname.split('/')[2];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAProduct(productId));
        dispatch(getUserCart());
    }, []);

    const cartState = useSelector(state => (state?.auth?.cartProducts));
    useEffect(()=>{
        for (let index = 0; index < cartState?.length; index++) {
            if(productId === cartState[index]?.productId?._id)
            {
                setAlreadyAdded(true);
            }
            
        }
    },[])
    const uploadCart = ()=>{
        if(color === null)
        {
            toast.error("Please choose a color")
            return false;
        }
        else{
            dispatch(addProdToCart({
                productId : productState?._id,color,price :productState?.price,quantity    }))
                navigate('/cart')
        }
    }


    const productState = useSelector(state => state?.product?.product);
    // console.log(productState?.color);
    const userState = useSelector(state => state?.auth?.user);
    // console.log(productState);
    var star_count = productState?.totalrating;
    const { orderedProduct, setOrderedProduct } = useState(false);
    // if useState(false) => user is not logged in and not bought the product so can't write a review
    // if useState(true) => user is logged in and has bought the product so can write a review
    return (
        <>
            <Breadcrum title={productState?.title} />
            <div className='main-product-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-1 bg-white'>
                            <div className='side-images d-flex flex-column gap-10 py-2'>
                                <div>
                                    <img className='img-fluid mt-4' src={productState?.images} alt="main-prod-1" />
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
                                        value={star_count}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='review-count mb-0'>Based on 42 reviews</p>
                                </div>
                                <div className='title mb-3'>
                                    <h4>{productState?.title}</h4>
                                </div>
                                <div className='main-price mb-3'>
                                    <h5>${productState?.price}</h5>
                                </div>
                                <div className='product-description border-bottom'>
                                    <p>{productState?.description}</p>
                                </div>
                            </div>
                            <div className='med-prod mb-3'>
                                <p className='pt-3'>Availability : In Stock</p>
                                <p>Brand : {productState?.brand}</p>
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
                                {
                                    alreadyAdded === false && <>
                                    <div className='product-details mb-3'>
                                        <h5>Color:</h5>
                                        <Color  setcolor={setcolor} colorData ={productState?.color}  />
                                    </div></>
                                }
                                <div className='d-flex align-items-center gap-10'>
                                    {
                                        alreadyAdded ===false && <>
                                        <p className='mb-0'>Quantity : </p>
                                    <div>
                                        <input className='form-control'
                                            type='number'
                                            name=''
                                            id=''
                                            min={1}
                                            max={10}
                                            onChange={(e)=> setquantity(e.target.value)}
                                            value={quantity}
                                        />
                                    </div></>
                                    }
                                    <button onClick={()=>alreadyAdded? navigate('/cart') :uploadCart()}  className='button'>{alreadyAdded?"Go to Cart" :"Add to Cart"}</button>
                                    <Link to='/checkout' className='button buynow'>Buy Now</Link>
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
                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading mb-0'>Product Link : </h3>
                                    <a className='product-link mb-0' href='javascript:void(0); ' onClick={() => {
                                        copy(window.location.href);
                                    }} >Copy Product Link</a>
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
                                            value='4'
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
                                <form onSubmit={formik.handleSubmit}
                                    action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type='text' className='form-control' name='reviewtitle' placeholder='Review Title'
                                            value={formik.values.reviewtitle}
                                            onChange={formik.handleChange("reviewtitle")}
                                            onBlur={formik.handleBlur("reviewtitle")} />
                                        <div className='error'>
                                            {formik.touched.reviewtitle && formik.errors.reviewtitle}
                                        </div>
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
                                            name='comment' id='' cols="30" rows="6" placeholder='Enter Your Text' value={formik.values.comment}
                                            onChange={formik.handleChange("comment")}
                                            onBlur={formik.handleBlur("comment")}>

                                        </textarea>
                                        <div className='error'>
                                            {formik.touched.comment && formik.errors.comment}
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <h4 className='add-photo'>Add a photo (optional)</h4>
                                        <div class="fileupload">
                                            <input type="file" name="fileupload" accept="image/*" /></div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button type="button" className='button'>Submit review</button>
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
                            {
                                productState?.ratings && productState.ratings.length > 1 ? <div>
                                    <div className='p-3 single-review'>
                                        <div className=' gap-5 align-items-center'>
                                            <h5>{productState?.ratings[0]?.reviewtitle}</h5>
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
                                        <p className='text-dark fs-6'>{productState?.ratings[0]?.comment}</p>
                                        <h6 className='mb-0 p-2'><b>- {userState?.firstname}</b></h6>
                                        <p className='date-review'>Posted on : 16 Jan 2024</p>
                                    </div>
                                    <div className='p-3 single-review'>
                                        <div className=' gap-5 align-items-center'>
                                            <h5>{productState?.ratings[1]?.reviewtitle}</h5>
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
                                        <p className='text-dark fs-6'>{productState?.ratings[0]?.comment}</p>
                                        <h6 className='mb-0 p-2'><b>- {userState?.firstname}</b></h6>
                                        <p className='date-review'>Posted on : 16 Jan 2024</p>
                                    </div>
                                </div> :
                                    <div className='no-review-msg'>
                                        <h5>No reviews for this product yet!</h5>
                                    </div>
                            }


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
