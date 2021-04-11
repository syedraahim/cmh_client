import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import { vendorCheck } from "../../../../server/middlewares/auth";
import {fetchTimeslots} from "../../../actions/timeslots";
import {fetchVendorCalendar} from "../../../actions/vendorCalendar";

const BookVendor = () => {

    const [timeslots, setTimeslots] = useState([]);
    const [vendorcal, setVendorCal] = useState([]);
    const [loading, setLoading] = useState(false);

    useState( () => {
        fetchTimeslots()
        .then ( (res) => setTimeslots(res.data));
    },[]);
    
    useState( () => {
       fetchVendorCalendar()
       .then ( (res) => setVendorCal(res.data));
    },[]);
    
    return (
       
       <div className= "row">
         <h1>Check Vendor Availability</h1>
         <div className= "col col-md-12">
           
         { vendorCal && vendorCal.map ( (vc) => (
              <div key= {vc._id}>
                  <p>vc.availability.start</p>                  
              </div>
         ))
         }

         </div>

       </div>

    )

}

export default BookVendor;