import React from 'react'

import blog1 from "../images/blog-1.jpg";
import { Link } from 'react-router-dom';
const BlogCard = (props) => {
    const {id,title,description,date} = props;
    return (
        <div className='col-3'>
            <div className='blog-card'>
                <div className='card-image'>
                    <img src={blog1} className='img-fluid' alt='blog-image' />
                </div>
                <div className='blog-content'>
                    <p className='date'>{date}</p>
                    <h5 className='title'>{title}</h5>
                    <p className='desc'>{description} </p>
                    <Link to={"/blog/"+id} className='button'> Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
