import React, {useState, useEffect} from "react";
import {getAllVendorCategories} from "../../actions/vendor";
import VendorCard from "../cards/VendorCard";

const GetAllVendors= () => {

    const [vendors, setVendors] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect( () => {
      loadAllVendorCats();
    },[]);

    const loadAllVendorCats= () => {
        setLoading(true);
        getAllVendorCategories().then ( res => setVendors(res.data) );
        setLoading(false);
    }

    return (
    <div>
       {/* {JSON.stringify(vendors)} */}
        <div className= "jumbotron">
          { loading ? <h4>Loading....</h4> : <h4>All Vendors</h4>} 
      </div>
        <div className= "container">
         
             <div className="row mb-2">
              {vendors.map( (vendor) => {
                return(
                <div className= "col col-md-4" key={vendor._id}>
                  <VendorCard  vendor= {vendor}/>
                </div>
                )
              })}       
            </div>
          
      </div>
    </div>
    )   

}

export default GetAllVendors;