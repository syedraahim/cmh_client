import axios from "axios";

export const addVendor =  async (formvalues, authtoken) =>  {
    const res = await axios.post("http://localhost:5000/api/vendor",formvalues,
    {headers: {authtoken}});   
  };