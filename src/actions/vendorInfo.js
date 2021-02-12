import axios from "axios";
import history from "../history";

export const addVendorInfo =  async (formvalues, authtoken) =>  {
    const res = await axios.post("http://localhost:5000/api/vendorinfo",formvalues,
    {headers: {authtoken}}); 
    history.push("/vendor/vendormain");   
  };

export const fetchVendorsInfo = async () =>  {
    return await axios.get("http://localhost:5000/api/vendorinfo");  
  };


export const fetchVendorInfo = async (email) =>  {
    return await axios.get(`http://localhost:5000/api/vendorinfo/${email}`);  
  };

  export const editVendorInfo = async (email, formValues, authtoken)  => {
    console.log("authtoken", authtoken);
    const res= await axios.put(`http://localhost:5000/api/vendorinfo/${email}`,formValues,
     {headers: {authtoken }});
     console.log("Response from edit",res);
     history.push("/vendor/vendormain"); 
 };  

