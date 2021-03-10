import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {LoadingOutlined} from "@ant-design/icons";
import {getAccountStatus} from "../../actions/stripe";

const StripeCallback= ({history}) => {

    console.log("IN stripe callback page....");
  
    const { user } = useSelector((state) => ({ ...state }));
    const [loading,setLoading] = useState(false);
    console.log("USER from stripe callback", user);
    const dispatch= useDispatch();

    useEffect( () => {
      if (window.localStorage.user && window.localStorage.user.token) loadAccountStatus()
    },[window.localStorage.user]);

    const loadAccountStatus=  async () => {
       try { 
        const res=  getAccountStatus(user.token);
        console.log("USER ACCOUNT STATUS STRIPE CALLBACK",res);
       }
      catch (err) {
         console.log(err);
      }
    }

    return (
        <div className="d-flex justify-content-center p-5">
           <h1> In callback page.... </h1>
           <LoadingOutlined 
               className= "display-1 p5 text-danger"
           />
        </div>
    )
}

export default StripeCallback;