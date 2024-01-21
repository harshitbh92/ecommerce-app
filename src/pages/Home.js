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

import {Link} from 'react-router-dom'

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
    </>
  )
}

export default Home
