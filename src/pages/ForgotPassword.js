import React from 'react'
import Breadcrum from '../components/Breadcrum'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
        <Breadcrum title='Forgot Password' />
        <div className='login-wrapper py-5'>
                <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='login-card'>
                            <h3 className='text-center'>Reset Password</h3>
                            <p className='text-center my-3'>You will recieve an email to reset your password</p>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input type='email' name='email'
                                        placeholder='Email' className='form-control' />
                                </div>
                                <div>
                                    <div className='d-flex flex-column align-items-center gap-15 justify-content-center mt-2'>
                                        <button className='button border-0' type='submit'>Submit</button>
                                        <Link to='/login'>Back to Login</Link>

                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                </div>
            </div>
    </>
  )
}

export default ForgotPassword
