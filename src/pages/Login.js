import Breadcrum from '../components/Breadcrum';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { toast } from "react-toastify";

const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const navigate = useNavigate();

    // 2. Define validation schema using yup
    const loginSchema = yup.object().shape({
        email: yup.string().email("Valid email must be provided").required("Email address is required"),
        password: yup.string().required("Password is required")
    });
    const initialValues = {
        email: '',
        password: ''
    }
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: (values) => {
            axios.post('http://localhost:5000/api/user/login', values)
                .then(result => {
                    console.log(result)
                    toast.info("User Logged in Successfully");
                    navigate('/')
                })
                .catch(error => console.log(error))
        },
    });


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     loginSchema.validate({ email, password }, { abortEarly: false }) // Validate form inputs using yup schema
    //         .then(() => {
    //             axios.post('http://localhost:5000/api/user/login', { email, password })
    //                 .then(result => {
    //                     console.log(result);
    //                     if (result.data.token) {
    //                         navigate('/');
    //                     }
    //                 })
    //                 .catch(error => console.log(error));
    //         })
    //         .catch(errors => {
    //             console.log(errors);
    //             // Handle validation errors here
    //         });
    // }

    return (
        <>
            <Breadcrum title='Login' />
            <div className='login-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='login-card'>
                                <h3 className='text-center mb-3'>Login</h3>
                                <form onSubmit={formik.handleSubmit}
                                    action='' className='d-flex flex-column gap-15'>


                                    <input className='form-control' type='email' name='email'
                                        placeholder='Email' value={formik.values.email}
                                        onChange={formik.handleChange("email")}
                                        onBlur={formik.handleBlur("email")} />
                                    <div className='error'>
                                        {formik.touched.email && formik.errors.email}
                                    </div>

                                    <input className='form-control' type='password' name='password'
                                        placeholder='Password' value={formik.values.password}
                                        onChange={formik.handleChange("password")}
                                        onBlur={formik.handleBlur("password")} />
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
                                {/* <form action='' onSubmit={handleSubmit} className='d-flex flex-column gap-15'>
                                    <div>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder='Email'
                                            className='form-control'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type='password'
                                            name='password'
                                            placeholder='Password'
                                            className='form-control'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <Link to='/forgot-password'>Forgot Password?</Link>
                                        <div className='d-flex align-items-center gap-15 justify-content-center mt-2'>
                                            <button className='button border-0' type='submit'>Login</button>
                                            <Link to='/signup' className='button signup'>Sign Up</Link>
                                        </div>
                                    </div>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
