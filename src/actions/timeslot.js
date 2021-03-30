import axios from "axios";
import history from "../history";

//action creator for Timeslot master
export const addTimeslot =  async (values,authtoken) =>  {
   const slot= await axios.post("http://localhost:5000/api/timeslot", values,
     { headers: {authtoken} });   
      history.push("/admin/timeslot/listslots");
 }; 

 export const fetchTimeslots= async () => {
     return await axios.get("http://localhost:5000/api/timeslots");
 }

 export const fetchTimeslot = async (_id) =>  {
    return await axios.get(`http://localhost:5000/api/timeslot/${_id}`);    
  };
 
 export const editTimeslot = async (_id, values, authtoken) =>  {
    const res= await axios.put(`http://localhost:5000/api/timeslot/${_id}`,values,
     { headers: {authtoken} }); 
      history.push("/admin/timeslot/listslots");
    };

 export const deleteTimeslot = async (_id, authtoken) =>  {
    const res= await axios.delete(`http://localhost:5000/api/timeslot/${_id}`,
     { headers: {authtoken} }); 
      history.push("/admin/timeslot/listslots");
    };