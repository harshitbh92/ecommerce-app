import React from 'react'
import Breadcrum from '../components/Breadcrum'

import home from "../images/home.png"
import call from "../images/call.png"
import mail from "../images/email.png"
import i from "../images/i-button.png"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import * as yup from 'yup';
import { useFormik } from 'formik';

const Contact = () => {
  const ContactSchema = yup.object().shape({
    name: yup.string().required("First Name is required"),
    email: yup.string().email("Valid email must be provided").required("Email address is required"),
    mobile: yup.string().required("Mobile Number is required"),
    comment: yup.string().required("Please write 1-2 sentences")
  });
  const initialValues = {
    name: '',
    email: '',
    mobile: '',
    comment: ''
  }
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema: ContactSchema,
    onSubmit: (values) => {
      axios.post('http://localhost:5000/api/enquiry/', values)
        .then(result => {
          console.log(result)
          toast.info("Enquiry posted Successfully");
          navigate('/')
        })
        .catch(error => console.log(error))
    },
  });
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
                  <form onSubmit={formik.handleSubmit}
                    action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' name='name' placeholder='Enter Your Name'
                        value={formik.values.name}
                        onChange={formik.handleChange("name")}
                        onBlur={formik.handleBlur("name")} />
                      <div className='error'>
                        {formik.touched.name && formik.errors.name}
                      </div>
                    </div>
                    <div>
                      <input className='form-control' type='email' name='email'
                        placeholder='Email' value={formik.values.email}
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")} />
                      <div className='error'>
                        {formik.touched.email && formik.errors.email}
                      </div>
                    </div>
                    <div>
                      <input className='form-control' type='tel' name='mobile'
                        placeholder='Mobile No' value={formik.values.mobile}
                        onChange={formik.handleChange("mobile")}
                        onBlur={formik.handleBlur("mobile")} />
                      <div className='error'>
                        {formik.touched.mobile && formik.errors.mobile}
                      </div>
                    </div>
                    <div>
                      <textarea className='w-100 form-control'
                        name='comment' id='' cols="30" rows="6" placeholder='Enter Your Text'
                        value={formik.values.comment}
                        onChange={formik.handleChange("comment")}
                        onBlur={formik.handleBlur("comment")}>

                      </textarea>
                      <div className='error'>
                        {formik.touched.comment && formik.errors.comment}
                      </div>
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
                        <a href="tel : +91 8267962851">+91 82679-62851</a>
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
