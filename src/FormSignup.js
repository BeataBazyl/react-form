 import React from 'react'
 import useForm from './useForm'
 
 const FormSignup = () => {
     const {handleChange, values, handleSubmit} = useForm ();

     return (
         <div className="form-content-right">
             <form action="" className="form" onSubmit={handleSubmit}>
                 <h1>Get started with us today! Create your account and fill out</h1>
                 <div className="form-inputs">
                     <label htmlFor="username"
                     className="form-label">
                         Username
                     </label>
                     <input
                         id="username"
                         type="text"
                         name="username"
                         className="form-input"
                         placeholder="Enter your username"
                         value={values.username}
                         onChange={handleChange}
                     />
                     </div>
                     <div className="form-inputs">
                     <label htmlFor="email"
                     className="form-label">
                         Email
                     </label>
                     <input
                         email="email"
                         type="email"
                         name="email"
                         className="form-input"
                         placeholder="Enter your email"
                         value={values.email}
                         onChange={handleChange}
                     />
                 </div>
                 <div className="form-inputs">
                     <label htmlFor="password"
                     className="form-label">
                         Password
                     </label>
                     <input
                         email="password"
                         type="password"
                         name="password"
                         className="form-input"
                         placeholder="Enter your password"
                         value={values.password}
                         onChange={handleChange}
                     />
                 </div>
                 <div className="form-inputs">
                     <label htmlFor="password2"
                     className="form-label">
                         Confirm Password
                     </label>
                     <input
                         email="password2"
                         type="password"
                         name="password2"
                         className="form-input"
                         placeholder="Confirm your password"
                         value={values.password2}
                         onChange={handleChange}
                     />
                 </div>
                 <button className="form-input-btn"
                 type="submit">
                     Sign up
                 </button>
                 <span className="form-input-login">
                     Already have an account? Login <a href="#">here</a>
                 </span>
             </form>
         </div>
     )
 }
 
 export default FormSignup