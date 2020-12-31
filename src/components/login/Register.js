import React from "react";

const Register = () => {
 return (
   <div class="container mt-5 ">

     <div class="row">
       <div class="col-sm-8">
         <div class="card register-form">
           <div class="card-header">
              <h1>Register</h1>
           </div>
           <div class="card-body">
             <form  action="/register" method="post">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" name="username"/>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password"class="form-control" name="password"/>
                </div>
              <button type="submit" class= "btn btn-primary" > Register</button>
             </form>

           </div>
         </div>
       </div>
     </div>
     <div class= "row mt-5">
       <div class="col-sm-8">
         <div class="card social-block">
           <div class="card-body">
             <a class="btn btn-block btn-social btn-google" href="/auth/google" role="button">
               <i class="fab fa-google"></i>
               Sign Up with Google
             </a>
           </div>
           <div class="card-body">
             <a class="btn btn-block btn-social btn-facebook" href="/auth/google" role="button">
               <i class="fab fa-facebook"></i>
               Sign Up with Facebook
             </a>
           </div>
           <div class="card-body">
             <a class="btn btn-block btn-social btn-twitter" href="/auth/google" role="button">
               <i class="fab fa-twitter"></i>
               Sign Up with Twitter
             </a>
           </div>
       </div>
       </div>
   </div>
   </div>
 );
}

export default Register;
