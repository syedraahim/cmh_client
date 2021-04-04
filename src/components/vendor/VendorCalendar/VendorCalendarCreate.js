import React, {useState,useEffect} from "react";
import CalendarBooking from "../../utils/CalendarBooking";
import VendorNav from "../../navigation/VendorNav";
import {DatePicker,TimePicker, Calendar} from "antd";
import {fetchTimeslots} from "../../../actions/timeslot";
import { NodeIndexOutlined } from "@ant-design/icons";
import {toast} from "react-toastify";

const VendorCalendar= () => {

  const [fromDate, setFromDate] = useState("");
  const [timeslots, setTimeslots] = useState([]);
  const [toDate, setToDate] = useState("");
  const [clicked, setClicked] = useState([]);
  const [caldata,setCaldata] = useState([]);

  useEffect( () => {
    fetchTimeslots().then( res => setTimeslots(res.data));
  },[]);

  const onChange= (value,mode) => {
    console.log(value,mode);
  }

  const handleClick= (e,t,index) => {
    e.preventDefault();
    console.log("E, index",e.target.value, index);
    timeslots && timeslots.map ( (slot,i) => {
      if (clicked.includes(index)) {
        const temp = [...clicked];
        const tempCal= [...caldata];
        console.log("TEMP1 INDEX",index);
        // removing the element using splice
        temp.splice(temp.indexOf(index),1);
        tempCal.splice(temp.indexOf(index),1);
      // updating the list
        setClicked(temp);
        setCaldata(tempCal);
        console.log("TEMP2",temp);
        return;
      }
      if (i === index) {        
        setClicked(prevArray => [...prevArray, i]);
        setCaldata(prevArray => [...prevArray, e.target.value]);                 
      } else {
        return slot
      }
       })
       }
   
  

  const handleSubmit= (e) => {
    e.preventDefault();
    console.log("CALDATA",caldata, fromDate, toDate);
  }

  return (
        <div className="row">
         <div className="col col-md-2 mt-1">
           <VendorNav />
        </div>
        <div className="col col-md-10 mt-2 ">
           <h1 className="font-weight-bold">Update your Availability</h1>
           <form>
            <div className= "col d-flex justify-content-center mt-1">
            <DatePicker
              className="site-calendar-card mt-2 ml-4 h6"
              placeholder="From date"
              format= "DD/MM/YYYY"          
              onChange= {(date,dateString) => setFromDate(date)}
             /> 
             <DatePicker
              className="site-calendar-card mt-2 ml-4 h6"
              placeholder="To date"              
              format= "DD/MM/YYYY"  
              onChange= {(date,dateString) => setToDate(date)}
             /> 
             </div>
             <br />
             {timeslots && timeslots.map( (t, index) => (
              <div className= "col  font-weight-bold d-flex justify-content-center mt-1 "
                   key= {t._id}>
                <button className=  { !clicked.includes(index) ? "btn btn-primary" : "btn btn-danger"}
                        value= {t.startSlot}
                        onClick= {(e) => handleClick(e,t,index)}                        
                >  
                 {t.startSlot} - {t.endSlot} </button>
              </div>
             ))
             }
          
            <div className= "col col-md-12 d-flex justify-content-center mt-3">
              <button className="btn btn-secondary font-weight-bold"
                      onClick= {handleSubmit}> Submit your Availability Slots</button>
            </div>
            </form>
        </div>
          
      </div>
  )    
}

export default VendorCalendar;