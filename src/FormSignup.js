 import React from 'react'
 
 const FormSignup = () => {
     return (
         <div className="form-content-right">
             <form action="" className="form">
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
                     />
                 </div>
                 <div className="form-inputs">
                     <label htmlFor="password2"
                     className="form-label">
                         Confirm Password
                     </label>
                     <input
                         email="password2"
                         type="password2"
                         name="password2"
                         className="form-input"
                         placeholder="Confirm your password"
                     />
                 </div>
                 <button className="form-input-btn"
                 type="submit">
                     Sign up
                 </button>
                 <span className="form-input-login">
                     Already have an account? Login <a href="#"></a>
                 </span>
             </form>
         </div>
     )
 }
 
 export default FormSignup