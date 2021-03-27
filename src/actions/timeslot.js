import axios from "axios";
import history from "../history";

//action creator for Timeslot master
export const addTimeslot =  async (values,authtoken) =>  {
    console.log("In timeslot action creator", values);
     return await axios.post("http://localhost:5000/api/timeslot", values,
     { headers: {authtoken} });   
    //  history.push("/admin/questions/questionslist");
 }; 