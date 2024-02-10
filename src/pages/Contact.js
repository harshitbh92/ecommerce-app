import React from 'react'
import Breadcrum from '../components/Breadcrum'

import home from "../images/home.png"
import call from "../images/call.png"
import mail from "../images/email.png"
import i from "../images/i-button.png"

const Contact = () => {
  return (
    <>
      <Breadcrum title='Contact Us' />
      <div className='contact-page py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 mb-5'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.7508982659556!2d77.736223175302!3d28.965112075484857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64b6ae32ec95%3A0x6af1f7676654ad3a!2sFIITJEE%20MEERUT%20CENTRE!5e0!3m2!1sen!2sin!4v1707504865482!5m2!1sen!2sin"
                width="100%" height="450"
                className='border-0'
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-12'>
              <div className='contactus-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-3'>Contact Us</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Enter Your Name' />
                    </div>
                    <div>
                      <input type='email' className='form-control' placeholder='Enter Your Email' />
                    </div>
                    <div>
                      <input type='tel' className='form-control' placeholder='Enter Your Phone No.' />
                    </div>
                    <div>
                      <textarea className='w-100 form-control'
                        name='' id='' cols="30" rows="6" placeholder='Enter Your Text'>
                      </textarea>
                    </div>
                    <div>
                      <button className='button'>Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-3'>Get In Touch With Us</h3>
                  <div className='touch'>
                    <ul>
                      <li className=' mb-3 d-flex gap-15 align-items-center'>
                        <img src={home} className='  fs-5' alt='contact-icon' />
                        <address className='mb-0'>
                        PLOT NO 80, B.I. Pvt. Ltd., 
                        Meerut, Uttar Pradesh
                        250004
                        </address>
                      </li>
                      <li className=' mb-3 d-flex gap-15 align-items-center'>
                        <img src={call} className=' fs-5' alt='contact-icon' />
                        <a  href="tel : +91 8267962851">+91 82679-62851</a>
                      </li>
                      <li className=' mb-3 d-flex gap-15 align-items-center'>
                        <img src={mail} className=' fs-5' alt='contact-icon' />
                        <a href='mailto:hb.bhatnagar08@gmail.com'>hb.bhatnagar08@gmail.com</a>
                      </li>
                      <li className=' mb-3 d-flex gap-15 align-items-center'>
                        <img src={i} className=' fs-5' alt='contact-icon' />
                        <p className='mb-0'>Monday - Friday 10AM to 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
