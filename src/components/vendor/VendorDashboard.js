import React, {useState} from "react";
import VendorNav from "../navigation/VendorNav";
import ConnectNav from "../navigation/ConnectNav";
import {useSelector} from "react-redux";
import {ToolOutlined} from "@ant-design/icons";
import {toast} from "react-toastify";
import {createConnectAccount} from "../../actions/stripe";

const VendorDashboard = ({history}) => {

    const {user} = useSelector( (state) => ({...state}));
    const [loading, setLoading] = useState(false);

    const handleClick=  async () => {
        setLoading(true);
        try {
          const res= await createConnectAccount(user.token);
          console.log("RES",res);
          window.location.href=res.data;
          setLoading(false);
        } catch (err) {
            console.log(err);
            toast.error("Stripe connect failed. Please try again");
            setLoading(false);
        }
    }

    const connectedVendor= () => (
     <div className= "row ml-0 text-align-top">
        <div className= "col-md-3 mt-2 ">
            <VendorNav />   
        </div> 
       <div className= "col ">
            <h2 className= "font-weight-bold "> Your Current Categories</h2>
            {/* {history.push(`/vendor/vendorcatlistuser/${user._id}`) } */}
        </div>
     </div>
    )

    const notConnectedVendor= () => (
    <div className= "container-fluid">
    <div className= "row"> 
    <div className= "col col-md-6 offset-3 text-center">
      <div className= "p-5 pointer">
        <ToolOutlined className="h2" />
        <h4 className= "font-weight-bold "> Setup payouts to add your jobs</h4>
        <p className="lead"> Compare my helper partners with stripe to transfer your earnings to your bank account</p>
        <button className="btn btn-primary mb-3"
                disabled= {loading}
                onClick= {handleClick}
                > { loading ? "Processing..."  : "Setup Payouts"}</button>
        <p className="text-muted">
           <small className="font-weight-bold" > *You will be redirected to stripe to complete the onboarding process</small> 
        </p>
      </div>
        
    </div>
    </div>
    </div>
    )


    return(
    <>
    <div className= "container-fluid bg-secondary p-5">
            <ConnectNav />
    </div>
    { user && user.stripe_seller && user.stripe_seller.charges_enabled
     ? connectedVendor()
     : notConnectedVendor()
    }
        
    </>
    )
}

export default VendorDashboard;