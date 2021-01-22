import React, {useState} from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import {Menu} from 'antd';
import { HomeOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import "bootstrap/dist/css/bootstrap.css";
import logo from "./common/cmh_new.png";

const { SubMenu} = Menu;

const Header = () => {

const [current,setCurrent] = useState('home');

const handleClick = (e) => {
   setCurrent(e.key);
}

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

      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<HomeOutlined />}>
          Home
        </Menu.Item>        
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Register">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          
        </SubMenu>
        
      </Menu>
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

 function mapStateToProps(state) {
     return {auth: state.auth};
 }

export default connect(mapStateToProps)(Header);
