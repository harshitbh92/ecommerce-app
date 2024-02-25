import React from 'react'
import Breadcrum from '../components/Breadcrum'
import { Link } from 'react-router-dom'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';

const loginSchema = yup.object({
    email: yup.string().email("Valid email must be provided").required("Email address is required"),
    password: yup.string().required("Password is required")
});

const Login = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            dispatch(loginUser(values))
        },
    });
    return (
        <>
            <Breadcrum title='Login' />
            <div className='login-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='login-card'>
                                <h3 className='text-center'>Login</h3>
                                <form action='' onSubmit={formik.handleSubmit}
                                 className='d-flex flex-column gap-15'>
                                    <CustomInput type='email' name='email'
                                        placeholder='Email'
                                        onChange={formik.handleChange("email")}
                                        onBlur={formik.handleBlur("email")}
                                         value= {formik.values.email}/>
                                        
                                    <div className='error'>
                                        {formik.touched.email && formik.errors.email}
                                    </div>
                                    <CustomInput type='password' name='password'
                                        placeholder='Password'
                                        onChange={formik.handleChange("password")}
                                        onBlur= {formik.handleBlur("password")}
                                        value= {formik.values.password}
                                        />
                                    <div className='error'>
                                        {formik.touched.password && formik.errors.password}
                                    </div>
                                    <div>
                                        <Link to='/forgot-password'>Forgot Password?</Link>
                                        <div className='d-flex align-items-center gap-15 justify-content-center mt-2'>
                                            <button className='button border-0' type='submit'>Login</button>
                                            <Link to='/signup' className='button signup'>Sign Up</Link>
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

export default Login
