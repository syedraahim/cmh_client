import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import {fetchVendorsInfo} from "../../../actions/vendorInfo";
import AdminNav from "../../navigation/AdminNav";
import AdminMenu from "../AdminMenu";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";
import SearchBar from "../../utils/SearchBar";

const VendorsInfoList = () => {

  const [vendors,setVendors] = useState([]);
  const [loading,setLoading] = useState(false);
  const [keyword,setKeyword] = useState("");

  useEffect( () => {
      getVendors();
  },[]);

 const getVendors = () => {
  setLoading(true);
  fetchVendorsInfo().then( (res) => setVendors(res.data));
  setLoading(false);
 }

 const addRoute= () => {
  return("/admin/vendors/vendorsinfolist");
 }

 const searchValue= (keyword) => (res) => res.name.toLowerCase().includes(keyword);

 const renderList = () => {

  return (
     vendors && vendors.filter(searchValue(keyword)).map( (vendor) => {
      return(
      <div className= "row"  key= {vendor._id}>            
      <div className= "col col-md-2 mb-2  category" >
           {vendor.name}
      </div>
      <div className= "col col-md-1 mb-2  category" >
           {vendor.postcode}
      </div>
      <div className= "col col-md-1 mb-2  category" >
           {vendor.houseNo}
      </div>
      <div className= "col col-md-2 mb-2  category" >
           {vendor.addressLine1}
         <div className= "col" >
           {vendor.addressLine2}
          </div>
      </div>      
      <div className= "col col-md-1 mb-2  category" >
           {vendor.city}
      </div>
      <div className= "col col-md-2 mb-2  category" >
           {vendor.county}
      </div>
      <div className= "col col-md-1 mb-2  category" >
           {vendor.country}
      </div>
      <div className= "col col-md-2 mb-2  category" >
           {vendor.website}
      </div>
      <div className= "col-md-2 mb-1">
              <Link to= {`/admin/vendors/vendoredit/${vendor.email}`} 
                 className= "btn btn-primary  mr-1 "><EditOutlined/>
              </Link>
              <Link to= {`/admin/vendors/vendordelete/${vendor.delete}`} 
                        className= "btn btn-danger mr-1 "><DeleteOutlined/>
              </Link>
              </div>
      </div>
      )
     })
  )
 }

  return (
   <div className= "row">
    <div className= "col-col-md-2">
       <AdminNav />
    </div>

    <div className= "col col-md-9">
      <AdminMenu 
         addRoute= {addRoute()}     
      />

     { loading ? <h2>Loading....</h2>
               : <h2 className= "card-header mb-2">List of Vendors</h2>
     }
     <SearchBar
          keyword= {keyword}
          setKeyword = {setKeyword}
     />
     <div className= "container-fluid category-center"> 
       <div className = " row">  
        <div className= " col col-md-2">     
            <h6 className= "float-left font-weight-bold">Name</h6>
        </div>
        <div className = "col col-md-1">
             <h6 className= "float-left font-weight-bold">Postcode</h6>
       </div>
       <div className = "col col-md-1">
             <h6 className= "float-left font-weight-bold">House</h6>
       </div>
       <div className = "col col-md-2">
             <h6 className= "float-center font-weight-bold">Address</h6>
       </div>
       <div className = "col col-md-1">
             <h6 className= "float-center font-weight-bold">City</h6>
       </div>
       <div className = "col col-md-2">
             <h6 className= "float-center font-weight-bold">County</h6>
       </div>
       <div className = "col col-md-1">
             <h6 className= "float-center font-weight-bold">Country</h6>
       </div>
       <div className = "col col-md-2">
             <h6 className= "float-center font-weight-bold">Website</h6>
       </div>
       </div> 
       </div>
     <form>
       {renderList()}
     </form>
   
   </div>
   </div>


     
    
  )
}

export default VendorsInfoList;