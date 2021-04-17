import React, {useState, useEffect} from "react";
import { List, Card } from "antd";
import {fetchTimeslots} from "../../actions/timeslot";
import moment from "moment";
import RenderTimeslot from "./RenderTimeslot";

const SelectTimeslot = ({match}) => {

     {console.log("Selected Date", match.params.vendor, match.params.selectedvalue)}

    const [ timeslots, setTimeslots] = useState([]);
    const [loading, setLoading] = useState(false);
    const [clicked, setClicked] = useState([]);
    const [caldata,setCaldata] = useState("");
    const days= [];

    useEffect( () => {
        setLoading(true);
        fetchTimeslots().then( res => setTimeslots(res.data));
        setLoading(false);
    },[]);

    const fetchDates= () => {
       for (let i=0; i< 12; i++) {
         days.push( moment(match.params.selectedvalue).add(i, 'days').format('DD/MM/YYYY') )
       }
    };

    const handleClick= (e,timeslot,index,day) => {
      e.preventDefault();
      {console.log("VALUES FROM SLOT",e,index,timeslot,day)}
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

  return (

    <div className= "row">
      {fetchDates()}
      {console.log("CALDATE",days)}
      {days && days.map ( day => (
       <div className= "col col-md-2">
        <Card   title= {day} >
         {timeslots && timeslots.map ( (timeslot,index) => ( 

            <RenderTimeslot 
              timeslot= {timeslot}
              index={index}
              day={day}
            />
             
         ))
         }
        </Card>           
       </div>
      ))}   

      </div>
    
  )
}

export default SelectTimeslot;