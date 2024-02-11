import React from 'react'
import main_banner from '../images/main-banner-1.jpg'
import cartbanner01 from "../images/catbanner-01.jpg"
import cartbanner02 from "../images/catbanner-02.jpg"
import cartbanner03 from "../images/catbanner-03.jpg"
import cartbanner04 from "../images/catbanner-04.jpg"
import free_delivery from "../images/free-delivery.png"
import gift from "../images/gift.png"
import support from "../images/support.png"
import bestprice from "../images/best-price.png"
import creditcard from "../images/credit-card.png"
import camera from "../images/camera.jpg"
import laptop from "../images/laptop.jpg"
import smartwatch from "../images/smartwatch.jpg"
import game_controller from"../images/game_controller.jpg"
import home_appliance from "../images/homeapp.jpg"
import tv from "../images/tv.jpg"
import Headphones from "../images/headphone.jpg"
import speaker from "../images/speaker.jpg"
import watch from "../images/watch.jpg"
import brand1 from "../images/brand-01.png"
import brand2 from "../images/brand-02.png"
import brand3 from "../images/brand-03.png"
import brand4 from "../images/brand-04.png"
import brand5 from "../images/brand-05.png"
import brand6 from "../images/brand-06.png"
import brand7 from "../images/brand-07.png"
import brand8 from "../images/brand-08.png"
import blog1 from "../images/blog-1.jpg";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";
import blog4 from "../images/blog4.png";
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

import {Link} from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import SpecialProduct from '../components/SpecialProduct'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner p-2 position-relative'>
                <img src={main_banner} className='img-fluid rounded-3' alt='main-banner'/>
                <div className='main-banner-content position-absolute'>
                  <h3>SUPERCHARGED FOR YOU.</h3>
                  <h5>Samsung S13+ Pro.</h5>
                  <p>From $200 or $12/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>

            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap  gap-10justify-content-between align-items-center'>
                <div className='small-banner position-relative p-3'>
                  <img src={cartbanner01} className='img-fluid rounded-3' alt='cart-banner-1' />
                  <div className='small-banner-content position-absolute'>
                  <h3>BEST SALE</h3>
                  <h5>Laptops Max</h5>
                  <p>From $1699.00 or $45/mo.</p>
                  {/* <Link className='button'>BUY NOW</Link> */}
                  </div>
                </div>

                <div className='small-banner position-relative p-3'>
                  <img src={cartbanner02} className='img-fluid rounded-3' alt='cart-banner-1' />
                  <div className='small-banner-content position-absolute'>
                  <h3>20% OFF</h3>
                  <h5>SmartWatch 7</h5>
                  <p>From $99.00 or $44.91/mo.<br/><br/>for 12 mo.</p>
                  {/* <Link className='button'>BUY NOW</Link> */}
                  </div>
                </div>

                <div className='small-banner position-relative p-3'>
                  <img src={cartbanner03} className='img-fluid rounded-3' alt='cart-banner-1' />
                  <div className='small-banner-content position-absolute'>
                  <h3>NEW ARRIVAL</h3>
                  <h5>Buy IPad Air</h5>
                  <p>From $99.00 or $44.91/mo.<br/><br/>for 12 mo.</p>
                  {/* <Link className='button'>BUY NOW</Link> */}
                  </div>
                </div>

                <div className='small-banner position-relative p-3'>
                  <img src={cartbanner04} className='img-fluid rounded-3' alt='cart-banner-1' />
                  <div className='small-banner-content position-absolute'>
                  <h3>FREE ENGRAVING</h3>
                  <h5>Boat Headphones</h5>
                  <p>High-quality playback and<br/><br/>Low-latency</p>
                  {/* <Link className='button'>BUY NOW</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 p-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src={free_delivery} alt='services'/>
                  <div >
                  <h6>Free Shipping</h6>
                  <p className='mb-0'>From all orders above $50</p>
                  </div>
                  
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={gift} alt='services'/>
                  <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className='mb-0'>Save upto 75%</p>
                  </div>
                  
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={support} alt='services'/>
                  <div>
                  <h6>Support 24/7</h6>
                  <p className='mb-0'>Shop with an expert</p>
                  </div>
                  
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={bestprice} alt='services'/>
                  <div>
                  <h6>Affordable prices</h6>
                  <p className='mb-0'>Get Factory Direct Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src={creditcard} alt='services'/>
                  <div>
                  <h6>Secure Payments</h6>
                  <p className='mb-0'>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-3 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-10'>
                  <div>
                    <h6>Cameras and Videos</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src={camera} alt=''/>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <h6>Smart Televisions</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src={tv} alt=''/>
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Accesories and More</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src={home_appliance} alt=''/>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <div>
                    <h6>Computers and Laptops</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src={laptop} alt=''/>
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Headphones and earphones</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src={Headphones} alt=''/>
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Portable Speakers</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src={speaker} alt=''/>
                </div>
                <div className='watch-class d-flex align-items-center gap'>
                  <div>
                    <h6>SmartWatches/ Watches</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src={watch} alt=''/>
                </div>
                <div className='game-class d-flex align-items-center gap-15'>
                  <div>
                    <h6>Music and Gaming</h6>
                    <p className='mb-0'>10 Items</p>
                  </div>
                  <img src={game_controller} alt=''/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='featured-collection py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <div className='d-flex'>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              </div>
          </div>
        </div>
      </section> */}
      <section className='featured-collection py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collections</h3>
            </div>
            <div className='col-2'>
              <div className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                  <Link>
                  <img src={wishlist} alt='wishlist'/>
                  </Link>
                </div>
                <div className='prod-image'>
                  <img src={prod1} className='prod-img img-fluid' alt='product-image'/>
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
                    <img src={compare} alt='compare products'/>
                    </Link>
                    <Link>
                    <img src={view} alt='view product'/>
                    </Link>
                    <Link>
                    <img src={cart} alt='add to cart'/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <div className='product-card position-relative'>
              <div className='wishlist-icon position-absolute'>
                  <Link>
                  <img src={wishlist} alt='wishlist'/>
                  </Link>
                </div>
                <div className='prod-image'>
                  <img src={prod2} className='img-fluid' alt='product-image'/>
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
                    <img src={compare} alt='compare products'/>
                    </Link>
                    <Link>
                    <img src={view} alt='view product'/>
                    </Link>
                    <Link>
                    <img src={cart} alt='add to cart'/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <div className='product-card position-relative'>
              <div className='wishlist-icon position-absolute'>
                  <Link>
                  <img src={wishlist} alt='wishlist'/>
                  </Link>
                </div>
                <div className='prod-image'>
                  <img src={prod3} className='img-fluid' alt='product-image'/>
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
                    <img src={compare} alt='compare products'/>
                    </Link>
                    <Link>
                    <img src={view} alt='view product'/>
                    </Link>
                    <Link>
                    <img src={cart} alt='add to cart'/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <div className='product-card position-relative'>
              <div className='wishlist-icon position-absolute'>
                  <Link>
                  <img src={wishlist} alt='wishlist'/>
                  </Link>
                </div>
                <div className='prod-image'>
                  <img src={prod4} className='img-fluid' alt='product-image'/>
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
                    <img src={compare} alt='compare products'/>
                    </Link>
                    <Link>
                    <img src={view} alt='view product'/>
                    </Link>
                    <Link>
                    <img src={cart} alt='add to cart'/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <div className='product-card position-relative'>
              <div className='wishlist-icon position-absolute'>
                  <Link>
                  <img src={wishlist} alt='wishlist'/>
                  </Link>
                </div>
                <div className='prod-image'>
                  <img src={prod5} className='img-fluid' alt='product-image'/>
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
                    <img src={compare} alt='compare products'/>
                    </Link>
                    <Link>
                    <img src={view} alt='view product'/>
                    </Link>
                    <Link>
                    <img src={cart} alt='add to cart'/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <div className='product-card position-relative'>
              <div className='wishlist-icon position-absolute'>
                  <Link>
                  <img src={wishlist} alt='wishlist'/>
                  </Link>
                </div>
                <div className='prod-image'>
                  <img src={prod6} className='img-fluid' alt='product-image'/>
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
                    <img src={compare} alt='compare products'/>
                    </Link>
                    <Link>
                    <img src={view} alt='view product'/>
                    </Link>
                    <Link>
                    <img src={cart} alt='add to cart'/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='special-products py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
            <div className='row'>
              <SpecialProduct/>
              <SpecialProduct/>
              <SpecialProduct/>
            </div>
          </div>
        </div>
      </section>

      <section className='marquee-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee  className='d-flex '>
                  <div className='mx-4 w-25'>  
                  {/* mx -> left or right amd width is 25 */}
                    <img src={brand1} alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>  
                  {/* mx -> left or right amd width is 25 */}
                    <img src={brand2} alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>  
                  {/* mx -> left or right amd width is 25 */}
                    <img src={brand3} alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>  
                  {/* mx -> left or right amd width is 25 */}
                    <img src={brand4} alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>  
                  {/* mx -> left or right amd width is 25 */}
                    <img src={brand5} alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>  
                  {/* mx -> left or right amd width is 25 */}
                    <img src={brand6} alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>  
                  {/* mx -> left or right amd width is 25 */}
                    <img src={brand7} alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>  
                  {/* mx -> left or right amd width is 25 */}
                    <img src={brand8} alt='brand'/>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper marquee-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Updates</h3>
            </div>
            <div className='col-3'>
            <div className='blog-card'>
                <div className='card-image'>
                    <img src={blog1} className='img-fluid' alt='blog-image' />
                </div>
                <div className='blog-content'>
                    <p className='date'>22 Jan, 2024</p>
                    <h5 className='title'>A beautiful Moring with a new Breeze.</h5>
                    <p className='desc'>Teams will have to take an online assessment round consisting of 20 questions. The earlier you start, the better. All team members will attempt the online assessment individually. </p>
                    <Link to="/blog/:id" className='button'> Read More</Link>
                </div>
            </div>
            </div>
            <div className='col-3'>
                <div className='blog-card'>
                    <div className='card-image'>
                        <img src={blog2} className='img-fluid' alt='blog-image' />
                    </div>
                    <div className='blog-content'>
                        <p className='date'>22 Jan, 2024</p>
                        <h5 className='title'>A beautiful Moring with a new Breeze.</h5>
                        <p className='desc'>Teams will have to take an online assessment round consisting of 20 questions. The earlier you start, the better. All team members will attempt the online assessment individually. </p>
                        <Link to="/blog/:id" className='button'> Read More</Link>
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <div className='blog-card'>
                    <div className='card-image'>
                        <img src={blog3} className='img-fluid' alt='blog-image' />
                    </div>
                    <div className='blog-content'>
                        <p className='date'>22 Jan, 2024</p>
                        <h5 className='title'>A beautiful Moring with a new Breeze.</h5>
                        <p className='desc'>Teams will have to take an online assessment round consisting of 20 questions. The earlier you start, the better. All team members will attempt the online assessment individually. </p>
                        <Link to="/blog/:id" className='button'> Read More</Link>
                    </div>
                </div>
            </div>
            <div className='col-3'>
                <div className='blog-card'>
                    <div className='card-image'>
                        <img src={blog4} className='img-fluid' alt='blog-image' />
                    </div>
                    <div className='blog-content'>
                        <p className='date'>22 Jan, 2024</p>
                        <h5 className='title'>A beautiful Moring with a new Breeze.</h5>
                        <p className='desc'>Teams will have to take an online assessment round consisting of 20 questions. The earlier you start, the better. All team members will attempt the online assessment individually. </p>
                        <Link to="/blog/:id" className='button'> Read More</Link>
                    </div>
                </div>
            </div>
            {/* <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
