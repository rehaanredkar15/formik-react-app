import React from 'react'
import './Login.css'
import { useFormik } from 'formik'
import * as yup from 'yup';


let PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

let validationSchema = yup.object({
    username:yup.string().min(3,'Please Enter rour real name').required("Full Name is required"),
    password: yup.string().matches(PASSWORD_REGEX,"Please enter  a strong password").required("Password is required")

})

const LoginForm = () => {
    const onSubmit =  (values) => {
       alert(JSON.stringify(values));
    }

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validateOnBlur:true,
    onSubmit,
    validationSchema:validationSchema,
  })   
  
  return (
    <>
    <div className='MainContainer'>
       <div className="container">
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>Username:</label>
        <input type="text" id="username" name="username"  value ={formik.values.fullName} onChange={formik.handleChange}  onBlur={formik.handleBlur} />
        {formik.touched.username && formik.errors.username ? (
        <div className='formikError'>{formik.errors.username}</div>
      ) : ""}

        <label>Password:</label>
        <input  id="password" name="password"  value ={formik.values.password} onChange={formik.handleChange}    onBlur={formik.handleBlur}/>
        {formik.touched.password  && formik.errors.password  ? (
        <div className='formikError'>{formik.errors.password }</div>
      ) : ""}

        <button type="submit" disabled={!formik.isValid}>Login</button>
      </form>
    </div>
    </div>
    </>
  )
}

export default LoginForm
