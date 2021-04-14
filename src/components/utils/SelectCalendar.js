import React, {useState} from "react";
import { Calendar, Alert } from 'antd';
import moment from 'moment';

const SelectCalendar= () => {

    
    const [value, setValue] = useState(moment(new Date()));
    const [selectedValue, setSelectedValue] = useState(moment(new Date));

    const onSelect = value => {
        setValue(value);
        setSelectedValue(value);
        }
    const onPanelChange = value => {
           setValue(value);
          };

     {console.log("SELECTED VALUE", selectedValue)}
  return (        

      <div className= "row d-flex justify-content-center">
        <div className= "col col-md-6 font-weight-bold">
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




