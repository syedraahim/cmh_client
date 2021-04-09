import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import VendorNav from "../../navigation/VendorNav";
import {DatePicker} from "antd";
import {Link} from "react-router-dom";
import moment from "moment";
import {fetchTimeslots} from "../../../actions/timeslot";

const VendorCalendarEdit= () => {

const {user} = useSelector( (state) => ({...state}));
const [fromDate, setFromDate] = useState("");
const [toDate, setToDate] = useState("");
const [timeslots, setTimeslots] = useState([]);
const [clicked, setClicked] = useState([]);
const [loading,setLoading] = useState("false");

useEffect( () => {
    fetchTimeslots().then( res => setTimeslots(res.data));
},[]);

const handleClick= () => {

}

const handleSubmit= () => {

}

    return (
     <div className= "row">
      <div className= "col col-md-3">
        <VendorNav />
      </div>
      <div className="col col-md-9">
        <h2 className="font-weight-bold">Update your Availability</h2>
        <form>
            <div className= "col d-flex justify-content-center">
            <DatePicker
              className="site-calendar-card mt-1 ml-4 h6"
              placeholder="From date"
              size= "large"   
              value= {fromDate}              
              onChange= {(date,dateString) => 
                        setFromDate(dateString)
                       }
              disabledDate= { (current => 
                    current && current.valueOf() < moment().subtract( 1- "days"))}
             /> 
             <DatePicker
              className="site-calendar-card mt-1 ml-4 h6"
              placeholder="To date" 
              size="large"   
              value= {toDate}          
              // format= "DD/MM/YYYY"  
              onChange= {(date,dateString) => 
                          setToDate(dateString)
                          }
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
          
            <div className= "row  mt-3">
              <div className= "col col-md-6 d-flex justify-content-end" >
               <button className="btn btn-secondary font-weight-bold"
                      onClick= {handleSubmit}> Submit your Availability</button>
               </div>
            
            <div className= "col col-md-6 d-flex justify-content-start">
              <Link to= {`/vendor/vendorcallist/${user._id}`}
               type="button" className= "btn btn-secondary font-weight-bold">Back</Link>
            </div>
            </div>
            </form>
      </div>

     </div>
    )

}

export default VendorCalendarEdit;