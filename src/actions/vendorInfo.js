import axios from "axios";

export const addVendorInfo =  async (formvalues, authtoken) =>  {
    const res = await axios.post("http://localhost:5000/api/vendorinfo",formvalues,
    {headers: {authtoken}});   
  };