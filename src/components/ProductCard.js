import React from 'react'
import { Link, useLocation } from 'react-router-dom'
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

const ProductCard = (props) => {
  let location = useLocation();
  const {products,grid} = props;
  console.log(typeof products);
  console.log( products);
   // Check if data is an array and has at least one element
   
  return (

    <>

      {
        products && products?.data.map(
          (product) => (
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
      <Link to={`${location.pathname == "/"? "/product/:id" : location.pathname == "/product/:id" ? "/product/:id" : ":id" }`} 
        className='product-card position-relative'>
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
          
                     <h6 className='brand-name'>{product.brand}</h6>

          <h6 className='product-title'>
            {product.description}
          </h6>
          <ReactStars
            count={5}
            size={24}
            value={product?.totalrating.toString()}
            // value='3.5'
            edit={false}
            activeColor="#ffd700"
          />
          <p className='price'>${product.price}</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-10'>
            <Link>
              <img src={compare} alt='compare products' />
            </Link>
            <Link to='/product/:id'>
              <img src={view} alt='view product' />
            </Link>
            <Link>
              <img src={cart} alt='add to cart' />
            </Link>
          </div>
        </div>
      </Link>
    </div>
          )
        )
      }


      
        
      
    
    
    
    </>
    // <div className='col-2'>
    //   <div className='product-card position-relative'>
    //     <div className='wishlist-icon position-absolute'>
    //       <Link>
    //         <img src={wishlist} alt='wishlist' />
    //       </Link>
    //     </div>
    //     <div className='prod-image'>
    //       <img src={prod1} className='prod-img img-fluid' alt='product-image' />
    //       {/* <img src={smartwatch} className='prod-img-hover img-fluid' alt='product-image'/> */}
    //     </div>
    //     <div className='prod-details'>
    //       <h6 className='brand-name'>Titan</h6>
    //       <h6 className='product-title'>
    //         Kids watch bulk 10 items pack multi colored
    //       </h6>
    //       <ReactStars
    //         count={5}
    //         size={24}
    //         value='3.5'
    //         edit={false}
    //         activeColor="#ffd700"
    //       />
    //       <p className='price'>$100.00</p>
    //     </div>
    //     <div className='action-bar position-absolute'>
    //       <div className='d-flex flex-column gap-10'>
    //         <Link>
    //           <img src={compare} alt='compare products' />
    //         </Link>
    //         <Link>
    //           <img src={view} alt='view product' />
    //         </Link>
    //         <Link>
    //           <img src={cart} alt='add to cart' />
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default ProductCard
