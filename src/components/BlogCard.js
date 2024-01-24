import React from 'react'

import blog1 from "../images/blog-1.jpg";
import { Link } from 'react-router-dom';
const BlogCard = () => {
    return (
        <div className='col-3'>
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
    )
}

export default BlogCard
