import React, {useState} from "react";
import VendorNav from "../../navigation/VendorNav";
import {DatePicker} from "antd";
import moment from "moment";

const VendorCalendarBulk = () => {

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const handleSubmit= () => {

    }

return (
  <div className= "row">
      <div className="col col-md-3 mt-1">
           <VendorNav />
       </div>
       <div className= " col col-md-9 mt-2 ">
       <h2 className="font-weight-bold">Add your Bulk Booking</h2>
       <form>
        <div className= "col d-flex justify-content-center" >
       <DatePicker
              className="site-calendar-card mt-2 ml-4 h6"
              placeholder="Enter booking start date"
              size= "large"
              format= "DD/MM/YYYY"          
              onChange= {(date,dateString) => 
                        setFromDate(dateString)
                       }
              disabledDate= { (current => 
                    current && current.valueOf() < moment().subtract( 1- "days"))}
        />  
        <DatePicker
              className="site-calendar-card mt-2 ml-4 h6"
              placeholder="Enter booking end date"
              size= "large"
              format= "DD/MM/YYYY"          
              onChange= {(date,dateString) => 
                        setToDate(dateString)
                       }
              disabledDate= { (current => 
                    current && current.valueOf() < moment().subtract( 1- "days"))}
        /> 
          </div>
          <div  className="row mb-2">
              <div className= "col d-flex justify-content-center mt-3">
                <button className="btn btn-primary font-weight-bold"
                      onClick= {handleSubmit}> Submit your Bulk Availability</button>
               </div>

          </div>
            
            
         </form>
       </div>

  </div>

)

}

export default VendorCalendarBulk;


