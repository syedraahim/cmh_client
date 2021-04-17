import React, {useState} from "react";
import { Calendar, Alert } from 'antd';
import {Link} from "react-router-dom";
import moment from 'moment';
import SelectTimeslot from "./SelectTimeslot";

const SelectCalendar= ({vendor}) => {

    
    const [value, setValue] = useState(moment(new Date()));
    const [selectedValue, setSelectedValue] = useState(moment(new Date));
    
    const onSelect = value => {
        setValue(value);
        setSelectedValue(value); 
        <SelectTimeslot 
          selectedValue= {value}
        />             
      }
    const onPanelChange = value => {
           setValue(value);
      };
    
    return (        

      <div className= "row d-flex justify-content-center">
        <div className= "col col-md-6 font-weight-bold mb-2">
        <Link to= {`/selectslot/${vendor}/${selectedValue}`} 
                 className= "btn btn-primary mb-2 d-flex justify-content-center">Select Timeslot
        </Link>
       <Alert
          message={`You selected date: ${selectedValue}`}
        />
        
        <Calendar value={moment(value)} 
                  onSelect={onSelect} 
                  onPanelChange={onPanelChange}                 
         />
        </div>
      </div>
  )

}

export default SelectCalendar;




