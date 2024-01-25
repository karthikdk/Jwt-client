import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Registration = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errors,setErrors]=useState({})
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData={
            name:name,
            email:email,
            password:password
        }
         //validations
         const validationErrors={}

         if(!formData?.name?.trim()) {
             validationErrors.name = "username is required"
         }
         if(!formData?.email?.trim()) {
             validationErrors.email = "email is required"
         } else if(!/\S+@\S+\.\S+/.test(formData.email)){
             validationErrors.email = "email is not valid"
         }
         if(!formData?.password?.trim()) {
             validationErrors.password = "password is required"
         } else if(formData.password.length < 6){
             validationErrors.password = "password should be at least 6 char"
         }
         setErrors(validationErrors)
 
         if(Object.keys(validationErrors).length === 0) {
             alert("Successfully Registered")
         }
        axios.post('http://localhost:3111/api/users/register',formData)
            .then((res)=>{
               navigate('/login')
            })
            .catch((err)=>{
                console.log(err)
            })
    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    <div className="bg-white p-3 rounded w-25">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="email">
            <strong>Name</strong>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            autoComplete="off"
            name="name"
            className="form-control rounded-0"
            onChange={(e) => setName(e.target.value)}
          />
           {errors.name && <span style={{color:'red'}}>{errors.name}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            className="form-control rounded-0"
            onChange={(e) => setEmail(e.target.value)}
          />
           {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="email">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className="form-control rounded-0"
            onChange={(e) => setPassword(e.target.value)}
          />
           {errors.password && <span style={{color:'red'}}>{errors.password}</span>}
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-0">
          Register
        </button>
        </form>
        <p>Already Have an Account</p>
        <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
         <Link to='/login'>Login</Link>
        </button>
      
    </div>
  </div>
  )
}

export default Registration
