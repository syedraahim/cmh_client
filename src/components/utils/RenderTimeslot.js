import React, {useState, useEffect} from "react";
import { List, Card } from "antd";
import {fetchTimeslots} from "../../actions/timeslot";
import moment from "moment";

const RenderTimeslot = ({timeslot,index,day}) => {  

    
    const [clicked, setClicked] = useState([]);
    const [caldata,setCaldata] = useState("");  
    const [ color, setColor] = useState(false);
    

    const handleClick= (e,timeslot,index,day) => {
      e.preventDefault();
      setColor(!color);
    //   {console.log("VALUES FROM SLOT",e,index,timeslot,day)}
    //   timeslot && timeslot.map ( (slot,i) => {
    //     if (clicked.includes(index)) {
    //       const temp = [...clicked];
    //       const tempCal= [...caldata];
    //      // removing the element using splice
    //       temp.splice(temp.indexOf(index),1);
    //       tempCal.splice(temp.indexOf(index),1);
    //     // updating the list
    //       setClicked(temp);
    //       setCaldata(tempCal);
    //       return;
    //     }
    //     if (i === index) {        
    //       setClicked(prevArray => [...prevArray, i]);
    //       setCaldata(prevArray => [...prevArray, e.target.value]);                 
    //     } else {
    //       return slot
    //     }
    //      })
    console.log(timeslot,'timeslot',day)
         }  

  return (
        
             <div>
                
              <button className= "btn btn-outline-primary font-weight-bold mb-2"
                      key={timeslot._id}
                      className=  { !color ? "btn btn-primary" : "btn btn-danger"}
                       value= {timeslot._id}
                        onClick= {(e) => handleClick(e,timeslot,index,day)} 
                      >
                    {timeslot.startSlot}-{timeslot.endSlot}
               </button> 
               </div>      
        
       
  )
}

export default RenderTimeslot;