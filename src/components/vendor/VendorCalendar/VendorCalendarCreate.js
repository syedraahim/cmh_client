import React, {useState} from "react";
import CalendarBooking from "../../utils/CalendarBooking";
import VendorNav from "../../navigation/VendorNav";
import {DatePicker,TimePicker, Calendar} from "antd";

const VendorCalendar= () => {


  const [startDate, setStartDate] = useState("");
  const [toDate, setTotDate] = useState("");

  const onChange= (value,mode) => {
    console.log(value,mode);
  }

  return (
        <div className="row">
        <div className="col col-md-2 mt-2">
           <VendorNav />
        </div>
        <div className="col col-md-10 mt-2 ">
           <h1 className="font-weight-bold">Update your Availability</h1>
           <form>
            <DatePicker
              className="site-calendar-card mt-3 ml-4 h6"
              placeholder="From date"              
              onChange= {(date,dateString) => console.log(date,dateString)}
             /> 
             <DatePicker
              className="site-calendar-card mt-3 ml-4 h6"
              placeholder="To date" 
              onChange= {(date,dateString) => console.log(date,dateString)}
             /> 
             <br />
             <TimePicker
               className="site-calendar-card mt-3 ml-4 h6"
               placeholder="Start time" 
               onChange= {(date,dateString) => console.log(date,dateString)}
              />
              <TimePicker
               className="site-calendar-card mt-3 ml-4 h6"
               placeholder="End time" 
               onChange= {(date,dateString) => console.log(date,dateString)}
              />
            </form>
        </div>
          
      </div>
  )    
}

export default VendorCalendar;