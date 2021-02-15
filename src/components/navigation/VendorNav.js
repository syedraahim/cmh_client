import React, {useState,useEffect} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {fetchVendorInfo} from "../../actions/vendorInfo";

const VendorNav = () => {

  const {user} = useSelector( state => ({...state}));  
  const [vendor,setVendor] = useState("");

  useEffect( () => {
    fetchVendorInfo(user.email)
    .then ( res => setVendor(res.data));
  },[]);

  return(
    <nav className="navbar mt-2  navlist">
      <ul className= "nav flex-column font-weight-bold mt-2">
      { (vendor) ?
        <li className= "nav-item">
          <Link to= {`/vendor/vendorinfoedit/${user.email}`} className= "nav-link">VENDOR DETAILS</Link>
        </li>     
      :<li className= "nav-item">
          <Link to= "/vendor/vendorinfocreate" className= "nav-link">VENDOR DETAILS</Link>
        </li>
      }
      <li className= "nav-item">
          <Link to= "/vendor/vendorcatlistuser/:userid" className= "nav-link">VENDOR CATEGORIES</Link>
      </li>
      
      <li className= "nav-item">
          <Link to= "/vendor/history" className= "nav-link">VENDOR HISTORY</Link>
        </li>
        
        <li className= "nav-item">
          <Link to= "/vendor/vendorcategories" className= "nav-link">CHANGE CATEGORIES</Link>
        </li>
        <li className= "nav-item">
          <Link to= "/vendor/password" className= "nav-link">PASSWORD RESET</Link>
        </li>
      </ul>
    </nav>
   )
  }

export default VendorNav;