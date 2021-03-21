import React from "react";
import CalendarBooking from "../../utils/CalendarBooking";
import VendorNav from "../../navigation/VendorNav";

const VendorCalendar= () => {

  return (
        <div className="row">
        <div className="col col-md-2 mt-2">
           <VendorNav />
        </div>
        <div className="col col-md-10 mt-2 ">
           <h1 className="font-weight-bold">Update your Availability</h1>
            <CalendarBooking /> 
        </div>
          
      </div>
  )    
}

export default VendorCalendar;