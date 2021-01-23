import React, {useState, useEffect} from "react";
import {auth} from "../../firebase";
import {toast, ToastContainer} from "react-toastify";

const RegisterComplete = (history) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //history.push(dashboard);

  useEffect(() => {
      setEmail(window.localStorage.getItem("emailForRegistration"))
  }, []);

  const handleSubmit= async (e) => {
    e.preventDefault();

    if( !email || !password) {
        toast.error("Email and password must be entered");
        return;
    }
    if( password.length < 6) {
        toast.error("Password must be minimum 6 characters");
        return;
    }
    try {
        const result = await auth.signInWithEmailLink(email, window.location.href)
        console.log(result);

        if(result.user.emailVerified) {
            window.localStorage.removeItem("emailForRegistration");
            let user = auth.currentUser;
            await user.updatePassword(password);
            const idTokenResult = await user.getIdTokenResult();
            // update in redux store 
            console.log("User",user, idTokenResult);

            history.push('/');
        }
    } 
    catch (err) {
       console.log(err);
       toast.error(err.message);
    }
    }

    //save the user to local storage
    // window.localStorage.setItem('emailForRegistration', email);
    // setEmail("");


 const completeRegisterForm = ()  => {
  
  return (
  <form  onSubmit = {handleSubmit}>
    <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" 
           className="form-control" 
           value= {email}
           disabled
    />
    </div>
    <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" 
           className="form-control" 
           placeholder= "Password"
           value={password}
           onChange= { (e) => setPassword(e.target.value)} 
           />
    </div>
   <button type="submit" className= "btn btn-primary float-center" > Register</button>
  </form>
  )
  }


 return (
   <div className="container mt-5 ">

     <div className="row">
       <div className="col-md-8 offset-md-3">
         <div className="card register-form">
           <div className="card-header">
              <h1>Complete Registration</h1>
           </div>
           <div className="card-body">
             <ToastContainer />
             {completeRegisterForm()}
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

export default RegisterComplete;
