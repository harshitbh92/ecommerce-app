import React from 'react'
import {Link} from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

import prod1 from "../images/watch.jpg";
// import prod2 from "../images/prod2.jpg";
// import prod3 from "../images/prod3.jpg";
// import prod4 from "../images/prod4.jpg";
// import prod5 from "../images/prod5.jpg";
// import prod6 from "../images/prod6.jpg";
import cart from "../images/cart.png";
import compare from '../images/compare.png'
import view from "../images/view.png"
import wishlist from "../images/wishlist.png"

const ProductCard = () => {
  return (
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
  )
}

export default ProductCard
