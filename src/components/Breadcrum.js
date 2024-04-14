import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrum = (props) => {
    const { title } = props;
    return (
        <div className='breadcrum py-3 mb-0'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='text-center mb-0'>
                            <Link to="/" className='text-dark' >Home</Link> / {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Breadcrum
