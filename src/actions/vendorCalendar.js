import axios from "axios";
import history from "../history";

export const addVendorCalendar =  async (formvalues, authtoken) =>  {
    const res = await axios.post("http://localhost:5000/api/vendorcal",formvalues,
    {headers: {authtoken}}); 
    history.push("/vendor/dashboard");   
  };