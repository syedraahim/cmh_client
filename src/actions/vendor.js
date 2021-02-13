import axios from "axios";
import history from "../history";

export const addVendor =  async (formvalues, authtoken) =>  {
    const res = await axios.post("http://localhost:5000/api/vendor",formvalues,
    {headers: {authtoken}});   
  };

export const getAllVendorCategories = async() => {
  return await axios.get("http://localhost:5000/api/vendors"); 
}

export const getVendorCategories = async(email) => {
  return await axios.get(`http://localhost:5000/api/vendors/${email}`); 
}

