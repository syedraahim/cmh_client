import React from "react";

const Login = () =>
{
return(
<div className="container mt-5 ">
  <div className="row">
    <div className ="col-md-8">
      <div className="card register-form">
        <div className="card-header">
           <h1>Login</h1>
        </div>
        <div className="card-body">
          <form  action="/login" method="post">
             <div className="form-group">
               <label for="email">Email</label>
               <input type="email" className="form-control" name="username"> </input>
             </div>
             <div className="form-group">
               <label for="password">Password</label>
               <input type="password"className="form-control" name="password" />
             </div>
           <button type="submit" className= "btn btn-primary" > Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className= "row mt-5">
    <div className="col-md-8">
      <div className="card social-block">
        <div className="card-body">
          <a className="btn btn-block btn-social btn-google"
             href="/auth/google"
             role="button">
            <i className="fab fa-google"></i>
            Sign Up with Google
          </a>
        </div>
        <div className="card-body">
          <a className="btn btn-block btn-social btn-facebook"
             href="/auth/google"
             role="button">
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
export default Login;
