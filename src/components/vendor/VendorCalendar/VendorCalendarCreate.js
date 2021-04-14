import React, {useState,useEffect} from "react";
import {useSelector} from "react-redux";
import VendorNav from "../../navigation/VendorNav";
import {DatePicker} from "antd";
import {fetchTimeslots} from "../../../actions/timeslot";
import {addVendorCalendar,fetchVendorCalendar} from "../../../actions/vendorCalendar";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import moment from "moment";

const VendorCalendar= () => {

  const {user} = useSelector( state => ({...state}));
  const [fromDate, setFromDate] = useState("");
  const [timeslots, setTimeslots] = useState([]);
  const [toDate, setToDate] = useState("");
  const [clicked, setClicked] = useState([]);
  const [caldata,setCaldata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [calBookings, setCalBookings] = useState([]);
  

  useEffect( () => {
    fetchTimeslots().then( res => setTimeslots(res.data));
  },[]);

  const loadVendorCalendar= () => {
    fetchVendorCalendar()
    .then ( res => setCalBookings(res.data) )
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
    // const newFrom= new Date(moment(fromDate).format('YYYY-MM-DD[T00:00:00.000Z]'));
    // const newTo= new Date(moment(toDate).format('YYYY-MM-DD[T00:00:00.000Z]'));
      
      addVendorCalendar(user._id,{vendorInfoId: user._id,                      
                      availability: [ {start: fromDate ,
                                       end: toDate
                                       ,timeslots:caldata }
                                    ]},user.token)
      .then ( (res) => {
                      setLoading(false);
                      toast.success("Successfully created calendar booking");
                      setTimeout( () => {
                        window.location.reload();
                      },1000);
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
        <div className="col col-md-10">
           <h2 className="font-weight-bold">Add your Availability</h2>
           <form>
            <div className= "col d-flex justify-content-center">
            <DatePicker
              className="site-calendar-card mt-1 ml-4 h6"
              placeholder="From date"
              size= "large"
              // format= "DD/MM/YYYY"          
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
              <div className= "font-weight-bold "
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

export default VendorCalendar;