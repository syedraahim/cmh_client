import React, {useState} from "react";
import {auth} from "../../firebase";
import {toast,ToastContainer} from "react-toastify";

const Register = () => {

  const [email, setEmail] = useState("");
 
const handleSubmit= async (e) => {
    e.preventDefault();
    const config = {
       url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
       handleCodeInApp: true
    }

    await auth.sendSignInLinkToEmail(email,config);
    toast.success(`Email is send to ${email}. Please check your email to complete registration.`);

    //save the user to local storage
    window.localStorage.setItem('emailForRegistration', email);
    setEmail("");
}

 const registerForm = ()  => {
  
  return (
  <form  onSubmit = {handleSubmit}>
    <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" 
           className="form-control" 
           value= {email}
           onChange = { (e) => setEmail(e.target.value) }
           autoFocus
    />
    </div>
   <div className= "row justify-content-center">
     <button type="submit" className= "btn btn-primary" >Register</button>
   </div>
  
  </form>
  )
 }
 return (
   <div className="container mt-5 ">

     <div className="row">
       <div className="col-md-8 offset-md-3">
         <div className="card register-form">
           <div className="card-header">
              <h1>Register</h1>
           </div>
           <div className="card-body">
            <ToastContainer />
             {registerForm()}
           </div>
         </div>
       </div>
     </div>
     <div className= "row mt-5">
       <div className="col-md-8 offset-md-3">
         <div className="card social-block">
           <div className="card-body">
             <a className="btn btn-block btn-social btn-google" href="/auth/google" role="button">
               <i className="fab fa-google"></i>
               Sign Up with Google
             </a>
           </div>
           <div className="card-body">
             <a className="btn btn-block btn-social btn-facebook" href="/auth/google" role="button">
               <i className="fab fa-facebook"></i>
               Sign Up with Facebook
             </a>
           </div>
           
       </div>
       </div>
   </div>
   </div>
 );
}

export default Register;
