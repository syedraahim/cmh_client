import React, {useState,useEffect} from "react";
import {useSelector} from "react-redux";
import CalendarBooking from "../../utils/CalendarBooking";
import VendorNav from "../../navigation/VendorNav";
import {DatePicker} from "antd";
import {fetchTimeslots} from "../../../actions/timeslot";
import {addVendorCalendar} from "../../../actions/vendorCalendar";
import {toast} from "react-toastify";
import moment from "moment";

const VendorCalendar= () => {

  const {user} = useSelector( state => ({...state}));
  const [fromDate, setFromDate] = useState("");
  const [timeslots, setTimeslots] = useState([]);
  const [toDate, setToDate] = useState("");
  const [clicked, setClicked] = useState([]);
  const [caldata,setCaldata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    fetchTimeslots().then( res => setTimeslots(res.data));
  },[]);

  const onChange= (value,mode) => {
    console.log(value,mode);
  }

  const handleClick= (e,t,index) => {
    e.preventDefault();
    timeslots && timeslots.map ( (slot,i) => {
      if (clicked.includes(index)) {
        const temp = [...clicked];
        const tempCal= [...caldata];
       // removing the element using splice
        temp.splice(temp.indexOf(index),1);
        tempCal.splice(temp.indexOf(index),1);
      // updating the list
        setClicked(temp);
        setCaldata(tempCal);
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
    if (!fromDate || !toDate) {
      toast.error("Please select the dates");
    } else {
      setLoading(true);
      addVendorCalendar(user._id,{vendorInfoId: user._id, 
                      availability: [ {start: fromDate,end: toDate,timeslots:caldata }
                                    ]},user.token)
      .then ( (res) => {
                      setLoading(false);
                      // setFromDate("");
                      // setToDate("");
                      // setCaldata([]);
                      toast.success("Successfully created calendar booking ");
                     })
      .catch ( err => {
                      console.log(err);
                      setLoading(false);
                      if(err.response===400) 
                            toast.error(err.response.data);
                      else
                            toast.error(err.response);
                      })
      console.log("CALDATA",caldata, fromDate, toDate);

    }
    
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
              size= "large"
              format= "DD/MM/YYYY"          
              onChange= {(date,dateString) => setFromDate(dateString)}
              disabledDate= { (current => 
                    current && current.valueOf() < moment().subtract( 1- "days"))}
             /> 
             <DatePicker
              className="site-calendar-card mt-2 ml-4 h6"
              placeholder="To date" 
              size="large"             
              format= "DD/MM/YYYY"  
              onChange= {(date,dateString) => setToDate(dateString)}
              disabledDate= { (current => 
                    current && current.valueOf() < moment().subtract( 1- "days"))}
             /> 
             </div>
             <br />
             {timeslots && timeslots.map( (t, index) => (
              <div className= "col  font-weight-bold d-flex justify-content-center mt-1 "
                   key= {t._id}>
                <button className=  { !clicked.includes(index) ? "btn btn-primary" : "btn btn-danger"}
                        value= {t._id}
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