import React, { useState } from 'react'
import Breadcrum from '../components/Breadcrum'
// import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const SignUpSchema = yup.object({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  email: yup.string().email("Valid email must be provided").required("Email address is required"),
  mobile: yup.string().required("Mobile Number is required"),
  password: yup.string().required("Password is required")
});

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  mobile: '',
  password: ''
}

const SignUp = () => {
  // const [firstname, setFirstName] =useState();
  //   const [lastname, setLastName] = useState();
  //   const [email, setEmail] = useState();
  //   const [mobile, setMobile] = useState();
  //   const [password, setPassword] = useState();
    const navigate = useNavigate();

    const formik = useFormik({
      initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (values) => {
        axios.post('http://localhost:5000/api/user/register', values)
          .then(result => {
              console.log(result)
              toast.info("User Created Successfully");
              navigate('/login')
          })
          .catch(error => console.log(error))
      },
    });
    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     axios.post('http://localhost:5000/api/user/register',{firstname,lastname,email,mobile,password})
    //     .then(result => {
    //         console.log(result)
    //         navigate('/login')
    //     })
    //     .catch(error => console.log(error))
    // }
  return (
    <>
      <Breadcrum title='Sign Up' />
      <div className='login-wrapper py-5'>
        <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='login-card'>
              <h3 className='text-center mb-3'>Create Account</h3>
              <form onSubmit={formik.handleSubmit}
                  action='' className='d-flex flex-column gap-15'>

                  <input  className='form-control'  type='text' name='firstname'
                    placeholder='First Name'
                    value={formik.values.firstname}
                    onChange = {formik.handleChange("firstname")}
                    onBlur = {formik.handleBlur("firstname")}/>
                    <div className='error'>
                      {formik.touched.firstname && formik.errors.firstname}
                    </div>

                  <input  className='form-control' type='text' name='lastname'
                    placeholder='Last Name' value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")} />
                  <div className='error'>
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>

                  <input className='form-control'  type='tel' name='mobileno'
                    placeholder='Mobile No' value={formik.values.mobile}
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur("mobile")} />
                  <div className='error'>
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>

                  <input className='form-control'  type='email' name='email'
                    placeholder='Email' value={formik.values.email}
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")} />
                  <div className='error'>
                    {formik.touched.email && formik.errors.email}
                  </div>

                  <input className='form-control'  type='password' name='password'
                    placeholder='Password' value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")} /> 
                  <div className='error'>
                    {formik.touched.password && formik.errors.password}
                  </div>
                  <div>
                    <div className='d-flex align-items-center gap-15 justify-content-center mt-2'>
                      <button className='button border-0'>Sign Up</button>
                      
                    </div>
                    <div className='d-flex align-items-center gap-15 justify-content-center mt-2'>
                      <p className='mb-0'>Already have an account?</p>
                      <Link className='button signup' to='/login'>Login</Link>
                    </div>
                  </div>
                </form>
              {/* <form onSubmit={handleSubmit}
              action='' className='d-flex flex-column gap-15'>
                <div>
                  <input type='text' name='firstname'
                    placeholder='First Name' className='form-control'
                    onChange={(e)=> setFirstName(e.target.value)} />
                </div>
                <div>
                  <input type='text' name='lastname'
                    placeholder='Last Name' className='form-control'
                    onChange={(e)=> setLastName(e.target.value)} />
                </div>
                <div>
                  <input type='tel' name='mobile'
                    placeholder='Mobile No' className='form-control'
                    onChange={(e)=> setMobile(e.target.value)} />
                </div>
                <div>
                  <input type='email' name='email'
                    placeholder='Email' className='form-control' 
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div>
                  <input type='password' name='password'
                    placeholder='Password' className='form-control'
                    onChange={(e)=> setPassword(e.target.value)} />
                </div>
                <div>
                  <div className='d-flex align-items-center gap-15 justify-content-center mt-2'>
                    <button className='button border-0'>Sign Up</button>
                    {/* <Link to='/signup' className='button signup'>Sign Up</Link> */}
                  {/* </div>
                </div>
              </form>  */}
            </div>

          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default SignUp


// import React from 'react'
// import Breadcrum from '../components/Breadcrum'
// // import { Link } from 'react-router-dom'
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// // import input from '../components/CustomInput';
// import { useDispatch } from 'react-redux'
// import { registerUser } from '../features/user/userSlice';
// import CustomInput from '../components/CustomInput';

// const SignUpSchema = yup.object({
//   firstname: yup.string().required("First Name is required"),
//   lastname: yup.string().required("Last Name is required"),
//   email: yup.string().email("Valid email must be provided").required("Email address is required"),
//   mobile: yup.string().required("Mobile Number is required"),
//   password: yup.string().required("Password is required")
// });

// const initialValues = {
//   firstname: '',
//   lastname: '',
//   email: '',
//   mobile: '',
//   password: ''
// }
// const SignUp = () => {
//   const dispatch = useDispatch();
//   const formik = useFormik({
//     initialValues: initialValues,
//     validationSchema: SignUpSchema,
//     onSubmit: values => {

//       console.log(values);
//       dispatch(registerUser(values));
//       // alert(JSON.stringify(values));
//     },
//   });
//   // console.log(formik);
//   return (
//     <>
//       <Breadcrum title='Sign Up' />
//       <div className='login-wrapper py-5'>
//         <div className='container-xxl'>
//           <div className='row'>
//             <div className='col-12'>
//               <div className='login-card'>
//                 <h3 className='text-center'>Create Account</h3>
//                 <form onSubmit={formik.handleSubmit}
//                   action='' className='d-flex flex-column gap-15'>

//                   <CustomInput  className='form-control'  type='text' name='firstname'
//                     placeholder='First Name'
//                     value={formik.values.firstname}
//                     onChange = {formik.handleChange("firstname")}
//                     onBlur = {formik.handleBlur("firstname")}/>
//                     <div className='error'>
//                       {formik.touched.firstname && formik.errors.firstname}
//                     </div>

//                   <CustomInput  className='form-control' type='text' name='lastname'
//                     placeholder='Last Name' value={formik.values.lastname}
//                     onChange={formik.handleChange("lastname")}
//                     onBlur={formik.handleBlur("lastname")} />
//                   <div className='error'>
//                     {formik.touched.lastname && formik.errors.lastname}
//                   </div>

//                   <CustomInput className='form-control'  type='tel' name='mobileno'
//                     placeholder='Mobile No' value={formik.values.mobile}
//                     onChange={formik.handleChange("mobile")}
//                     onBlur={formik.handleBlur("mobile")} />
//                   <div className='error'>
//                     {formik.touched.mobile && formik.errors.mobile}
//                   </div>

//                   <CustomInput className='form-control'  type='email' name='email'
//                     placeholder='Email' value={formik.values.email}
//                     onChange={formik.handleChange("email")}
//                     onBlur={formik.handleBlur("email")} />
//                   <div className='error'>
//                     {formik.touched.email && formik.errors.email}
//                   </div>

//                   <CustomInput className='form-control'  type='password' name='password'
//                     placeholder='Password' value={formik.values.password}
//                     onChange={formik.handleChange("password")}
//                     onBlur={formik.handleBlur("password")} /> 
//                   <div className='error'>
//                     {formik.touched.password && formik.errors.password}
//                   </div>
//                   <div>
//                     <div className='d-flex align-items-center gap-15 justify-content-center mt-2'>
//                       <button className='button border-0'>Sign Up</button>
//                     </div>
//                   </div>
//                 </form>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default SignUp
