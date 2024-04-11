import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mainprod1 from "../images/main-prod1.png"
import mainprod2 from "../images/main-prod2.png"
import mainprod3 from "../images/main-prod3.png"
import mainprod4 from "../images/main-prod4.png"
import mainprod5 from "../images/main-prod5.png"
import mainprod6 from "../images/main-prod6.png"
import { getAProduct } from '../features/products/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import {  useLocation } from 'react-router-dom'

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: 'block', background: '#232f3e', // Add padding for better button visibility
      borderRadius: '10%', // Optionally, make the button rounded
      cursor: 'pointer' }} onClick={onClick}>
        Previous
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: 'block', background: '#232f3e', // Add padding for better button visibility
      borderRadius: '10%', // Optionally, make the button rounded
      cursor: 'pointer' }} onClick={onClick}>
        Next
      </div>
    );
  };
const MainSlider = () => {
  const location = useLocation();
    const productId = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getAProduct(productId));
  },[]);
  const productState = useSelector(state => state?.product?.product);
  console.log(productState);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

 

  return (
    <Slider {...settings}>
      <div>
        <img className='img-fluid mt-4' src={productState?.images} alt="main-prod-1" />
      </div>
      <div>
        <img className='img-fluid' src={mainprod2} alt="main-prod-2" />
      </div>
      <div>
        <img className='img-fluid' src={mainprod3} alt="main-prod-3" />
      </div>
      <div>
        <img className='img-fluid' src={mainprod4} alt="main-prod-4" />
      </div>
      <div>
        <img className='img-fluid' src={mainprod5} alt="main-prod-5" />
      </div>
      <div>
        <img className='img-fluid' src={mainprod6} alt="main-prod-6" />
      </div>
    </Slider>
  );
};

export default MainSlider;
