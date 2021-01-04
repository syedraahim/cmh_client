import React, {Component} from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./common/cmh_new.png";
// import 'materialize-css/dist/css/materialize.min.css';

class Header extends Component {
render() {
  console.log(this.props);
 return (
<div>
<header>
<section className="header-section" id="title">
  <div className="container-fluid">

    <nav className="navbar navbar-expand-lg navbar-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="/">Main</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/newletter">Newsletter</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/download">Download</a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto vendor"> </ul>
         <li className= "nav-item vendor">
           <Link to= "/admin"
            className="btn btn-md btn-sm btn-primary login-btn primary-button">Admin </Link>
          </li>
          <li className= "nav-item vendor">
           <Link to= "/vendor/vendorlogin"
            className="btn btn-md btn-sm btn-primary login-btn primary-button">Vendor </Link>
          </li>
          <li className= "nav-item vendor">
          <Link to= "/register"
            className="btn btn-md btn-sm btn-primary login-btn primary-button">Register</Link>
          </li>
          <li  className = "nav-item vendor">
              <Link to= "/login"
                 className="btn btn-md btn-sm btn-primary login-btn primary-button">Login </Link>
          </li>
      </div>
    </nav>
<section>
    <div className="row">
      <div className="pull-left col-sm-12">
        <img src= { logo } alt="Compare my Helper" className="float-left header-img" />
      </div>

     </div>
  </section>
  </div>
  </section>
</header>
</div>
);
}
}
 function mapStateToProps(state) {
     return {auth: state.auth};
 }

export default connect(mapStateToProps)(Header);
