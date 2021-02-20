import React, {useState, useEffect} from "react";
import {getVendors, getVendorsTotal} from "../../actions/vendor";
import VendorCard from "../cards/VendorCard";
import Jumbotron from "../cards/Jumbotron";
import LoadingCard from "../cards/LoadingCard";
import {Pagination} from "antd";

const GetAllVendors= () => {

    const [vendors, setVendors] = useState([]);
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [vendorsTotal, setVendorsTotal]= useState(0);

    useEffect( () => {
      loadAllVendorCats();
    },[page]);

    useEffect( () => {
        getVendorsTotal().then( res => setVendorsTotal(res.data));
    },[]);

    const loadAllVendorCats= () => {
        setLoading(true);
        getVendors("desc",page).then ( res => setVendors(res.data) );
        setLoading(false);
    }

    return (
    <div>
        {/* {JSON.stringify(vendors)}  */}
        {/* <div className= "jumbotron font-weight-bold h1 text-danger d-flex justify-content-center">
          <Jumbotron
             text= {["We will find the best helper for your needs",
                     "Compare the price to find the most affordable helper",
                     "So easy to use that you will have your help sorted in minutes"]}
           />         
      </div> */}
        <div className= "container">
         
          { loading ? <LoadingCard  count= {4}/> 
                    : 
            <div className="row mb-2">
              {vendors.map( (vendor) => {
                return(
                <div className= "col col-md-4" key={vendor._id}>
                  <VendorCard  vendor= {vendor}/>
                </div>
                )
              })}       
            </div>
          }           
      </div>
       <div className="row">
         <nav className= "col col-md-4 offset-md-4 pt-5 p-3 d-flex justify-content-center">
        
         <Pagination  current= {page}
                    total= {(vendorsTotal / 3) * 10}
                    onChange={ (value) => setPage(value)}
          />
         
          </nav>
          
        </div>
    </div>
    )   

}

export default GetAllVendors;