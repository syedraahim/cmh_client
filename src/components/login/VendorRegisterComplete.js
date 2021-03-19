import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {auth} from "../../firebase";
import {toast} from "react-toastify";
import { LOGGED_IN_USER } from "../../actions/types";
import { createOrUpdateVendor} from "../../actions/auth";

const VendorRegisterComplete = ({history}) => {

  const [email, setEmail] = useState("abc");
  const [password, setPassword] = useState("");
  const [loading,setLoading]= useState(false);
  const dispatch= useDispatch();

//  const emailVal= window.localStorage.getItem('emailForRegistration');
  useEffect(() => {
       setEmail(window.localStorage.getItem('emailForRegistration'));     
       console.log(window.location.href);
       console.log(window.localStorage.getItem("emailForRegistration")); 
       console.log("EMAIL from use Effect",email);   
  }, [history]); 

  const handleSubmit= async (e) => {
    e.preventDefault();
    console.log("In handle SUBMIT", email,window.location.href);
    if( !email || !password) {
        toast.error("Email and password must be entered");
        return;
    }
    if( password.length < 6) {
        toast.error("Password must be minimum 6 characters");
        return;
    }
    try {
        console.log("Before the result", email,window.location.href);
        console.log("AUTH FROM VENDOR COMP",auth);
        const email= window.localStorage.getItem('emailForRegistration');
        if (!email) 
          email = window.prompt('Please provide your email for confirmation');
        const result = await auth.signInWithEmailLink(email, window.location.href)
        console.log("RESULT", result)
        if(result.user.emailVerified) {
            window.localStorage.removeItem("emailForRegistration");
            let user = auth.currentUser;
            await user.updatePassword(password);
            const idTokenResult = await user.getIdTokenResult();
            console.log("user", user, "idTokenResult", idTokenResult);
            // update in redux store 
           createOrUpdateVendor(idTokenResult.token)     
          .then ( (res) => dispatch ({
                 type: LOGGED_IN_USER,
                 payload: {
                 name: res.data.name,
                 email: res.data.email,
                 token: idTokenResult.token,
                 role: res.data.role,
                _id: res.data._id
              }             
          })         
          ) 
          .catch ( (err) => console.log(err)); 
           history.push('/');
        }
    } 
    catch (err) {
       console.log(err);
       toast.error(err.message);
    }
    }

 const completeRegisterForm = ()  => (
  <form  
    onSubmit = {handleSubmit}
  >
    {console.log("IN complete registration EMAIL", email)}
    <div className="form-group font-weight-bold">
    <label>Email</label>
    <input type="email" 
           className="form-control" 
           value= {email}
           disabled
    />
    </div>
    <div className="form-group">
    <label >Password</label>
    <input type="password" 
           className="form-control" 
           placeholder= "Password"
           value={password}
           onChange= { (e) => setPassword(e.target.value)} 
           />
    </div>
    {console.log("IN Button")}
   <button type="submit" className= "btn btn-primary d-flex justify-content-center" > Register</button>
  </form>
  )
  


 return (
   <div className="container mt-5 ">
  
      {console.log("In vendor register completion")}
     <div className="row">
       <div className="col-md-8 offset-md-3">
         <div className="card register-form">
           <div className="card-header">
              <h1>Complete Registration</h1>
           </div>
           <div className="card-body">
           {console.log("In vendor register completion card body")}
                 {completeRegisterForm()}
           </div>
         </div>
       </div>
     </div>
     
   </div>
 );
 }

export default VendorRegisterComplete;
