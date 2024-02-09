import React from 'react'
import Breadcrum from '../components/Breadcrum'
import { Link } from 'react-router-dom'

import blog1 from "../images/blog-1.jpg";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";
import blog4 from "../images/blog4.png";

const Blog = () => {
    return (
        <>
            <Breadcrum title='Blogs' />
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
                            <div className='row'>
                            <div className='col-6 mb-3'>
                                <div className='blog-card'>
                                    <div className='card-image'>
                                        <img src={blog1} className='img-fluid' alt='blog-image' />
                                    </div>
                                    <div className='blog-content'>
                                        <p className='date'>22 Jan, 2024</p>
                                        <h5 className='title'>A beautiful Moring with a new Breeze.</h5>
                                        <p className='desc'>Teams will have to take an online assessment round consisting of 20 questions. The earlier you start, the better. All team members will attempt the online assessment individually. </p>
                                        <Link to="/" className='button'> Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 mb-3'>
                                <div className='blog-card'>
                                    <div className='card-image'>
                                        <img src={blog2} className='img-fluid' alt='blog-image' />
                                    </div>
                                    <div className='blog-content'>
                                        <p className='date'>22 Jan, 2024</p>
                                        <h5 className='title'>A beautiful Moring with a new Breeze.</h5>
                                        <p className='desc'>Teams will have to take an online assessment round consisting of 20 questions. The earlier you start, the better. All team members will attempt the online assessment individually. </p>
                                        <Link to="/" className='button'> Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 mb-3'>
                                <div className='blog-card'>
                                    <div className='card-image'>
                                        <img src={blog3} className='img-fluid' alt='blog-image' />
                                    </div>
                                    <div className='blog-content'>
                                        <p className='date'>22 Jan, 2024</p>
                                        <h5 className='title'>A beautiful Moring with a new Breeze.</h5>
                                        <p className='desc'>Teams will have to take an online assessment round consisting of 20 questions. The earlier you start, the better. All team members will attempt the online assessment individually. </p>
                                        <Link to="/" className='button'> Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 mb-3'>
                                <div className='blog-card'>
                                    <div className='card-image'>
                                        <img src={blog4} className='img-fluid' alt='blog-image' />
                                    </div>
                                    <div className='blog-content'>
                                        <p className='date'>22 Jan, 2024</p>
                                        <h5 className='title'>A beautiful Moring with a new Breeze.</h5>
                                        <p className='desc'>Teams will have to take an online assessment round consisting of 20 questions. The earlier you start, the better. All team members will attempt the online assessment individually. </p>
                                        <Link to="/" className='button'> Read More</Link>
                                    </div>
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

export default Blog
