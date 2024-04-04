import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import { FaHeart } from "react-icons/fa";

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
import redHeart from"../images/redHeart.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../features/products/productSlice';
import { getUserProductWishlist } from '../features/user/userSlice';

const ProductCard = (props) => {
  let location = useLocation();
  const {products,grid} = props;
    const dispatch = useDispatch();
    // const [isInWishlist, setIsInWishlist] = useState(false);

    // useEffect(() => {
    //   getWishlistofUser();
    // }, []);
  
    // const getWishlistofUser = () => {
    //   dispatch(getUserProductWishlist());
    // }
  
    const addToWish = (id) => {
      dispatch(addToWishlist(id));
      // setIsInWishlist(!isInWishlist); // Toggle the state when adding to wishlist
      toast.info('Product added to wishlist');
    }
  
    // const wishlistItems = useSelector(state => state.auth?.wishlist?.wishlist);
    
    // const isItemInWishlist = (id) => {
    //   return wishlistItems?.some(item => item.id === id);
    // }
  return (

    <>

      {
        products && products?.data.map(
          (product) => (
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
      <Link 
      //  to={`${location.pathname == "/"? "/product/:id" : location.pathname == "/product/:id" ? "/product/:id" : ":id" }`} 
        className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
          <button className='border-0 bg-transparent'
           onClick={(e)=>{addToWish(product?._id)}
           }>
             <img src={wishlist} alt='wishlist' />
          </button>
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
    //         </Link>`
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default ProductCard
