import React from 'react'
import Breadcrum from '../components/Breadcrum'
// import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <Breadcrum title='Sign Up' />
      <div className='login-wrapper py-5'>
        <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='login-card'>
              <h3 className='text-center'>Create Account</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <div>
                  <input type='text' name='name'
                    placeholder='Name' className='form-control' />
                </div>
                <div>
                  <input type='tel' name='mobileno'
                    placeholder='Mobile No' className='form-control' />
                </div>
                <div>
                  <input type='email' name='email'
                    placeholder='Email' className='form-control' />
                </div>
                <div>
                  <input type='password' name='password'
                    placeholder='Password' className='form-control' />
                </div>
                <div>
                  <div className='d-flex align-items-center gap-15 justify-content-center mt-2'>
                    <button className='button border-0'>Create</button>
                    {/* <Link to='/signup' className='button signup'>Sign Up</Link> */}
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

export default SignUp
