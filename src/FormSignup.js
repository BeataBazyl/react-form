 import React from 'react'
 import useForm from './useForm'
 import validate from './validate'; 

 const FormSignup = () => {
     const {handleChange, values, handleSubmit, errors} = useForm (validate);

     return (
         <div className="form-content-right">
             <form action="" className="form" onSubmit={handleSubmit}>
                 <h1>Zacznij juz dzisiaj! Załóż konto i wypełnij formularz</h1>
                 <div className="form-inputs">
                     <label htmlFor="username"
                     className="form-label">
                         Nazwa użytkownika
                     </label>
                     <input
                         id="username"
                         type="text"
                         name="username"
                         className="form-input"
                         placeholder="Wprowadź nazwę użytkownika"
                         value={values.username}
                         onChange={handleChange}
                     />
                        {errors.username && <p>{errors.username}</p>}
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
                         Hasło
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
                          Potwierdź hasło
                     </label>
                     <input
                         email="password2"
                         type="password"
                         name="password2"
                         className="form-input"
                         placeholder="Potwierdź hasło"
                         value={values.password2}
                         onChange={handleChange}
                     />
                 </div>
                 <button className="form-input-btn"
                 type="submit">
                     Zarejestruj się
                 </button>
                 <span className="form-input-login">
                     Masz konto? Zaloguj się <a href="#">tutaj</a>
                 </span>
             </form>
         </div>
     )
 }
 
 export default FormSignup