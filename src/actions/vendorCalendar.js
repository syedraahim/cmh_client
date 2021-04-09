import axios from "axios";
import history from "../history";

export const addVendorCalendar =  async (userid, formvalues, authtoken) =>  {
  console.log("Before response", formvalues);
    const res = await axios.post(`http://localhost:5000/api/vendorcalendar/${userid}`,formvalues,
    {headers: {authtoken}}); 
    console.log("RES from Vendor Calendar",res);
    // history.push("/vendor/dashboard");   
  };

  
export const fetchVendorCalendar =  async (userid) =>  {
 const res= await axios.get(`http://localhost:5000/api/vendorcalendar/${userid}`);  
  console.log("Vendor Calendar values",res) ;  
  return res;
 };

 export const readVendorCalendar =  async (id) =>  {
  const res= await axios.get(`http://localhost:5000/api/vendorcalendar/${id}`);  
   console.log("Vendor Calendar values",res) ;  
   return res;
  };