import React from 'react'
import Breadcrum from '../components/Breadcrum'
import ReactStars from "react-rating-stars-component";


import speaker from "../images/speaker.jpg"
import laptop from "../images/laptop.jpg"

const OurStore = () => {
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
                    <ul className='colors ps-0'>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>

                    </ul>
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
              <div className='filter-sort-grid'>
                <div className='justify-content-between d-flex align-items-center'>
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
                </div>
                <div></div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore

