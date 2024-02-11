import React from 'react'
import newsletter from '../images/newsletter.png'
import { Link } from 'react-router-dom';
import { BsLinkedin,BsGithub,BsYoutube,BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className='footer-upper py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-6'>
              <div className='footer-top-data d-flex gap-10 align-items-center'>
                <img src={newsletter} alt='newsletter'style={{ filter: 'brightness(0) invert(1)' }}/>
                <h3 className='text-white mb-0'>Sign Up to our Newsletter</h3>
              </div>
            </div>
            <div className='col-6'>
            <div className="input-group ">
                <input type="text" className="form-control py-1" placeholder="Your Email Address " aria-label="Yor email address"
                  aria-describedby="basic-addon2" />
                <button className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h3 className='text-white mb-4'>Contact Us</h3>
              <div>
                <address className='text-white fs-6'>
                PLOT NO 80, Bhatnagar Industries Pvt. Ltd.<br/> Mangal Pandey Nagar Rd<br/>
                 Meerut, Uttar Pradesh<br/>
                 250004
                </address>
                <a  className='text-white b-block mb-4'
                href='tel : +91 8267962851'>+91 82679-62851</a>
                <br/>
                <a  className='text-white b-block'
                href='mailto:hb.bhatnagar08@gmail.com'>hb.bhatnagar08@gmail.com</a>
                <div className='Social-icons d-flex gap-15 align-items-center mt-3'>
                  <a className='text-white fs-6' href=''><BsGithub/></a>
                  <a className='text-white fs-6' href=''><BsInstagram/></a>
                  <a className='text-white fs-6' href=''><BsYoutube/></a>
                  <a className='text-white fs-6' href=''><BsLinkedin/></a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h3 className='text-white mb-4'>Information</h3>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 '>Privacy Policy</Link>
                <Link className='text-white py-2 '>Refund Policy</Link>
                <Link className='text-white py-2 '>Terms of Service</Link>
                <Link to='/blogs' className='text-white py-2 '>Blogs</Link>
                <Link className='text-white py-2 '>Shiiping Policy</Link>
              </div>
            </div>
            <div className='col-3'>
              <h3 className='text-white mb-4'>Account</h3>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 '>Search</Link>
                <Link className='text-white py-2 '>About Us</Link>
                <Link className='text-white py-2 '>FAQ</Link>
                <Link to='/contact' className='text-white py-2 '>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h3 className='text-white mb-4'>Quick Links</h3>
              <div className='footer-links d-flex flex-column'>
                <Link to='store' className='text-white py-2 '>Laptops</Link>
                <Link to='store' className='text-white py-2 '>SmartWatches</Link>
                <Link to='store' className='text-white py-2 '>Headphones</Link>
                <Link to='store' className='text-white py-2 '>Tablets</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-white text-center mb-0'>
                &copy; {new Date().getFullYear()}   Copyright by Bhatnagar Industries Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
