import axios from "axios";
import history from "../history";

export const addVendorInfo =  async (formvalues, authtoken) =>  {
    const res = await axios.post("http://localhost:5000/api/vendorinfo",formvalues,
    {headers: {authtoken}}); 
    history.push("/vendor/dashboard");   
  };

export const fetchVendorsInfo = async () =>  {
    return await axios.get("http://localhost:5000/api/vendorinfo");  
  };


export const fetchVendorInfo = async (email) =>  {
    return await axios.get(`http://localhost:5000/api/vendorinfo/${email}`);  
  };

 export const editVendorInfo = async (email, formvalues, authtoken)  => {
    const res= await axios.put(`http://localhost:5000/api/vendorinfo/${email}`,formvalues,
     {headers: {authtoken }});    
     history.push("/vendor/dashboard"); 
 };  

 export const deleteVendorInfo = async(email, authtoken) => {
     const res= await axios.delete(`http://localhost:5000/api/vendorinfo/${email}`,
     {headers: {authtoken}});
     history.push("/admin/vendors/vendorinfolist");
 };

 export const fetchVendorInfoById = async(id) => {
    console.log("Response from InfoId",id);
    return await axios.get(`http://localhost:5000/api/vendorinfo/${id}`);
 }

