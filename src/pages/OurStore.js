import React, { useState } from 'react'
import Breadcrum from '../components/Breadcrum'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom'

import prod1 from "../images/watch.jpg";
import prod2 from "../images/prod2.jpg";
import prod3 from "../images/prod3.jpg";
import prod4 from "../images/prod4.jpg";
import prod5 from "../images/prod5.jpg";
import prod6 from "../images/prod6.jpg";
import prod7 from "../images/prod7.jpg";
import prod8 from "../images/prod8.jpg";
import prod9 from "../images/prod9.jpg";
import prod10 from "../images/prod10.jpg";
import prod11 from "../images/prod11.jpg";
import prod12 from "../images/prod12.jpg";
import prod13 from "../images/prod13.jpg";
import prod14 from "../images/prod14.jpg";
import prod15 from "../images/prod15.jpg";
import prod16 from "../images/prod16.jpg";
import cart from "../images/cart.png";
import compare from '../images/compare.png'
import view from "../images/view.png"
import wishlist from "../images/wishlist.png"
import speaker from "../images/speaker.jpg"
import laptop from "../images/laptop.jpg"
import gr1 from "../images/default_items.png"
import gr4 from "../images/3items_horizontal.png"
import gr2 from "../images/bars.png"
import gr3 from "../images/2items.png"
import Color from '../components/Color';

const OurStore = () => {
  // const {grid, setGrid} = useState(4);
  // alert(grid);
  return (
    <>
      <Breadcrum title='Our Store' />
      <div className='store-wrapper py-5 '>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-card-title'>Shop By Categories</h3>
                <div>
                  <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Others</li>

                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-card-title'>Apply Filter</h3>
                <div className='p-2'>
                  <h5 className='sub-title'>Availability</h5>
                  <div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='' />
                      <label className='form-check-label' htmlFor=''>
                        In Stock (0)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='' />
                      <label className='form-check-label' htmlFor=''>
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingInput" placeholder="From" />
                      <label for="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingInput1" placeholder="To" />
                      <label for="floatingInput1">To</label>
                    </div>
                  </div>

                  <h5 className='sub-title'>Colors</h5>
                  <div>
                    <Color/>
                  </div>
                  <h5 className='sub-title'>Size</h5>
                  <div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='size-1' />
                      <label className='form-check-label' htmlFor='size-1'>
                        S
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='size-1' />
                      <label className='form-check-label' htmlFor='size-1'>
                        M
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='size-1' />
                      <label className='form-check-label' htmlFor='size-1'>
                        L
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='size-1' />
                      <label className='form-check-label' htmlFor='size-1'>
                        XL
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='size-1' />
                      <label className='form-check-label' htmlFor='size-1'>
                        XXL
                      </label>
                    </div>
                  </div>

                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-card-title'>Product Tags</h3>
                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                  <span className='badge bg-light text-secondary rounded-3 px-2'>Headphones</span>
                  <span className='badge bg-light text-secondary rounded-3 px-2'>TV</span>
                  <span className='badge bg-light text-secondary rounded-3 px-2'>Watch</span>
                  <span className='badge bg-light text-secondary rounded-3 px-2'>Shoes</span>
                  <span className='badge bg-light text-secondary rounded-3 px-2'>Mobiles</span>
                  <span className='badge bg-light text-secondary rounded-3 px-2'>Tablet</span>
                  <span className='badge bg-light text-secondary rounded-3 px-2'>Laptops</span>



                </div>

              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-card-title'>BestSeller</h3>

                <div >
                  <div className='bestseller-1 d-flex'>

                    <div className='w-35'>
                      <img src={speaker} className='img-fluid px-3' alt='best seller product' />
                    </div>
                    <div className='w-65'>
                      <h5>
                        Kids watch bulk 10 items pack multi colored
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value='3.5'
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$250</b>

                    </div>

                  </div>
                  <div className='bestseller-2 d-flex'>

                    <div className='w-35'>
                      <img src={laptop} className='img-fluid px-3' alt='best seller product' />
                    </div>
                    <div className='w-65'>
                      <h5>
                        Kids watch bulk 10 items pack multi colored
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value='3.5'
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$250</b>

                    </div>

                  </div>
                </div>

              </div>
            </div>
            <div className='col-9'>
              <div className='filter-sort-grid mb-4'>
                <div className=' d-flex justify-content-between  align-items-center'>
                  <div className='d-flex align-items-center  gap-10'>
                    <p className='mb-0'>Sort By:</p>
                    <select name='' className='form-select form-control' id="">
                      <option value='manual'>Featured</option>
                      <option value='best-seller' selected='selected'>Best selling</option>
                      <option value='ascending-alphabet'>Alphabetically(A-Z) </option>
                      <option value='desc-alphabet'>Alphabetically(Z-A)</option>
                      <option value='price-lth'>Price (Low to High)</option>
                      <option value='price-htl'>Price (High to Low)</option>
                      <option value='date-new'>Date (Newest First)</option>
                      <option value='date-old'>Date (Oldest First)</option>
                    </select>
                  </div>

                  <div className='d-flex align-items-center gap-10'>
                    <p className='totalproducts mb-0'><b>120 products</b></p>
                    <div className='d-flex align-items-center gap-10 grid'>
                      <img 
                      src={gr1}
                        
                        className='d-block img-fluid' alt='grid' />
                      <img 
                      src={gr2}
                        // onClick={()=>{
                        //   setGrid(3);
                        // }}
                        className='d-block img-fluid' alt='grid' />
                      <img 
                      src={gr3}
                        // onClick={()=>{
                        //   setGrid(2);
                        // }}
                        className='d-block img-fluid' alt='grid' />
                      <img 
                       src={gr4}
                        // onClick={()=>{
                        //   setGrid(1);
                        // }}
                        className='d-block img-fluid' alt='grid' />
                    </div>
                  </div>
                </div>

              </div>

              <div className='products-list pb-5'>
                <div className='gap-10 flex wrap'>
                  <div className='row mb-4'>
                    <div className='col-3'>
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
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
                    <div className='col-3'>
                      <div className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                          <Link>
                            <img src={wishlist} alt='wishlist' />
                          </Link>
                        </div>
                        <div className='prod-image'>
                          <img src={prod2} className='prod-img img-fluid' alt='product-image' />
                          {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                        </div>
                        <div className='prod-details'>
                          <h6 className='brand-name'>Titan</h6>
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
                    <div className='col-3'>
                      <div className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                          <Link>
                            <img src={wishlist} alt='wishlist' />
                          </Link>
                        </div>
                        <div className='prod-image'>
                          <img src={prod3} className='prod-img img-fluid' alt='product-image' />
                          {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                        </div>
                        <div className='prod-details'>
                          <h6 className='brand-name'>Titan</h6>
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
                    <div className='col-3'>
                      <div className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                          <Link>
                            <img src={wishlist} alt='wishlist' />
                          </Link>
                        </div>
                        <div className='prod-image'>
                          <img src={prod4} className='prod-img img-fluid' alt='product-image' />
                          {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                        </div>
                        <div className='prod-details'>
                          <h6 className='brand-name'>Titan</h6>
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
                  <div className='row mb-4'>
                    <div className='col-3'>
                      <div className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                          <Link>
                            <img src={wishlist} alt='wishlist' />
                          </Link>
                        </div>
                        <div className='prod-image'>
                          <img src={prod5} className='prod-img img-fluid' alt='product-image' />
                          {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                        </div>
                        <div className='prod-details'>
                          <h6 className='brand-name'>Titan</h6>
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
                    <div className='col-3'>
                      <div className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                          <Link>
                            <img src={wishlist} alt='wishlist' />
                          </Link>
                        </div>
                        <div className='prod-image'>
                          <img src={prod6} className='prod-img img-fluid' alt='product-image' />
                          {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                        </div>
                        <div className='prod-details'>
                          <h6 className='brand-name'>Titan</h6>
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
                    <div className='col-3'>
                      <div className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                          <Link>
                            <img src={wishlist} alt='wishlist' />
                          </Link>
                        </div>
                        <div className='prod-image'>
                          <img src={prod7} className='prod-img img-fluid' alt='product-image' />
                          {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                        </div>
                        <div className='prod-details'>
                          <h6 className='brand-name'>Titan</h6>
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
                    <div className='col-3'>
                      <div className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                          <Link>
                            <img src={wishlist} alt='wishlist' />
                          </Link>
                        </div>
                        <div className='prod-image'>
                          <img src={prod8} className='prod-img img-fluid' alt='product-image' />
                          {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                        </div>
                        <div className='prod-details'>
                          <h6 className='brand-name'>Titan</h6>
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
                  <div className='row mb-4'>
                    <div className='col-3'>
                      <div className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                          <Link>
                            <img src={wishlist} alt='wishlist' />
                          </Link>
                        </div>
                        <div className='prod-image'>
                          <img src={prod9} className='prod-img img-fluid' alt='product-image' />
                          {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                        </div>
                        <div className='prod-details'>
                          <h6 className='brand-name'>Titan</h6>
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
                    <div className='col-3'>
                      <div className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                          <Link>
                            <img src={wishlist} alt='wishlist' />
                          </Link>
                        </div>
                        <div className='prod-image'>
                          <img src={prod10} className='prod-img img-fluid' alt='product-image' />
                          {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                        </div>
                        <div className='prod-details'>
                          <h6 className='brand-name'>Titan</h6>
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
                    <div className='col-3'>
                      <div className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                          <Link>
                            <img src={wishlist} alt='wishlist' />
                          </Link>
                        </div>
                        <div className='prod-image'>
                          <img src={prod11} className='prod-img img-fluid' alt='product-image' />
                          {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                        </div>
                        <div className='prod-details'>
                          <h6 className='brand-name'>Titan</h6>
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
                    <div className='col-3'>
                      <div className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                          <Link>
                            <img src={wishlist} alt='wishlist' />
                          </Link>
                        </div>
                        <div className='prod-image'>
                          <img src={prod12} className='prod-img img-fluid' alt='product-image' />
                          {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                        </div>
                        <div className='prod-details'>
                          <h6 className='brand-name'>Titan</h6>
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
                  <div className='row mb-4'>
                    <div className='col-3'>
                      <div className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                          <Link>
                            <img src={wishlist} alt='wishlist' />
                          </Link>
                        </div>
                        <div className='prod-image'>
                          <img src={prod13} className='prod-img img-fluid' alt='product-image' />
                          {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                        </div>
                        <div className='prod-details'>
                          <h6 className='brand-name'>Titan</h6>
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
                    <div className='col-3'>
                      <div className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                          <Link>
                            <img src={wishlist} alt='wishlist' />
                          </Link>
                        </div>
                        <div className='prod-image'>
                          <img src={prod14} className='prod-img img-fluid' alt='product-image' />
                          {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                        </div>
                        <div className='prod-details'>
                          <h6 className='brand-name'>Titan</h6>
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
                    <div className='col-3'>
                      <div className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                          <Link>
                            <img src={wishlist} alt='wishlist' />
                          </Link>
                        </div>
                        <div className='prod-image'>
                          <img src={prod15} className='prod-img img-fluid' alt='product-image' />
                          {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                        </div>
                        <div className='prod-details'>
                          <h6 className='brand-name'>Titan</h6>
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
                    <div className='col-3'>
                      <div className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                          <Link>
                            <img src={wishlist} alt='wishlist' />
                          </Link>
                        </div>
                        <div className='prod-image'>
                          <img src={prod16} className='prod-img img-fluid' alt='product-image' />
                          {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
                        </div>
                        <div className='prod-details'>
                          <h6 className='brand-name'>Titan</h6>
                          <h6 className='product-title'>
                            Kids watch bulk 10 items pack multi colored
                          </h6>
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
              </div>
              <div className=' d-flex  justify-content-center'>
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore

