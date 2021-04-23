import React, {useState, useEffect} from "react";
import { List, Card } from "antd";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {fetchTimeslots} from "../../actions/timeslot";
import moment from "moment";
import RenderTimeslot from "./RenderTimeslot";
import _ from "lodash";
import { fetchVendorCalendarDate } from "../../actions/vendorCalendar";

const SelectTimeslot = ({match}) => {

   {console.log("Selected Date XXXX", match.params.vendor, match.params.selectedvalue)}

    const [ timeslots, setTimeslots] = useState([]);
    const [currentslots,setCurrentslots] = useState([]);
    const [loading, setLoading] = useState(false);
    const [clicked, setClicked] = useState([]);
    const [caldata,setCaldata] = useState("");
   
    const days= [];
    const dispatch = useDispatch();
    let noOfDays= 6;
    let startDate= match.params.selectedvalue;
    let endDate= moment(match.params.selectedvalue).add(noOfDays, 'days'); 

    useEffect( () => {
        setLoading(true);
        fetchTimeslots().then( res => setTimeslots(res.data));
        setLoading(false);
    },[]);

    useEffect( () => {
       setLoading(true);
       fetchVendorCalendarDate(match.params.vendor,match.params.selectedvalue,endDate)
       .then( res => setCurrentslots(res.data));
    },[]);

    {console.log("Current timeslots YYY", currentslots)}

    const fetchDates= () => {
       for (let i=0; i< noOfDays; i++) {
         days.push( moment(match.params.selectedvalue).add(i, 'days').format('DD/MM/YYYY'));
       }
    };

    const handleTimeslots= () => {    
      
       setClicked(clicked);
     }

    const handleSubmit= (e,timeslot,index,day) => {
      e.preventDefault();
      {console.log("VALUES FROM SLOT",e,index,timeslot,day)}
      //  let cart = [];
      // //check if the cart already has an item
      // if ( typeof window !== "undefined") {
      //   if (localStorage.getItem("cart")) {
      //     cart= JSON.parse(localStorage.getItem("cart"))
      //   }
      //   cart.push({
      //     ...vendor,
      //     count: 1
      //   })
      //   let unique=_.uniqWith(cart,_.isEqual);
      //   console.log(unique);
      //   localStorage.setItem("cart",JSON.stringify(unique));
      //   setTooltip("Added");

      //   //add to redux store
      //   dispatch({
      //     type: "ADD_TO_CART",
      //     payload:unique
      //   });
      //   dispatch({
      //     type: "SET_VISIBLE",
      //     payload:true
      //   });
      // }
         }  

  return (
   <form  onSubmit= {handleSubmit}>
    <div className= "row">
      {fetchDates()}
      {console.log("CALDATE",days)}
      {days && days.map ( day => (
       <div className= "col col-md-2 d-flex justify-content-center" key={day}>
        <Card   title= {day} >
         {timeslots && timeslots.map ( (timeslot,index) => (
            <RenderTimeslot 
              timeslotval= {timeslot}
              index={index}
              key={index}
              day={day}  
              disabled = {currentslots.some(slot => {return (slot._id == timeslot._id && slot.availability.start== day)})}                       
            />            
         ))
         }
        </Card>
       </div>
      ))
      }
      <div className= "col col-md-6 mt-2 d-flex justify-content-end">
        <button className= "btn btn-primary "                   
                type= "submit"
        >Add To Cart</button>
      </div>
      <div className= "col col-md-6 mt-2 d-flex justify-content-start">
        <Link to= {`/bookvendor/${match.params.vendor}`}
               type="button" className= "btn btn-info">Back to Calendar</Link>
      </div>
      </div>      

      </form>
    
  )
}

export default SelectTimeslot;