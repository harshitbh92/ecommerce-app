import React from 'react'
import Breadcrum from '../components/Breadcrum'
import blog1 from "../images/blog-1.jpg";
import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";


const SingleBlog = () => {
    return (
        <>
            <Breadcrum title='Main Blog' />
            <div className='blog-page py-5'>
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
                        </div>
                        <div className='col-9'>
                            <div className='single-blog-card'>
                                <h3 className='title'>A beautiful Morning with a new Breeze</h3>
                                <img src={blog1} className='img-fluid w-100 my-4' alt='main-blog' />
                                <p>Teams will have to take an online assessment round consisting of 20 questions. The earlier you start, the better. All team members will attempt the online assessment individually. </p>
                                <div className='d-flex align-items-center gap-10 mb-4'>
                                    <IoArrowBackSharp />
                                    <Link to='/blogs'>Back to Blogs</Link>
                                </div>
                                <div className='comment-section'>
                                    <h3 className='contact-title mb-3'>Leave a Comment</h3>
                                    <form action='' className='d-flex flex-column gap-15'>
                                        <div className='d-flex gap-15 '>
                                            <div className='w-50'>
                                                <input type='text' className='form-control' placeholder='Enter Your Name' />
                                            </div>
                                            <div className='w-50'>
                                                <input type='email' className='form-control' placeholder='Enter Your Email' />
                                            </div>
                                        </div>
                                        <div>
                                            <textarea className='w-100 form-control'
                                                name='' id='' cols="30" rows="6" placeholder='Leave a Comment'>
                                            </textarea>
                                        </div>
                                        <div>
                                            <button className='button'>Post</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleBlog
