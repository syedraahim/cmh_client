import React, {useState,useEffect} from "react";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {addTimeslot} from "../../../actions/timeslot";
import {useSelector} from "react-redux";

const TimeslotCreate= () => {

   const {user} = useSelector( state => ({...state}));
   const [startslot, setStartslot] = useState("");
   const [endslot, setEndslot] = useState("");
   
    const handleSubmit = values => {
        console.log('Received values of form:', values);
        addTimeslot({values},user.token);
      };

        
    return (  
 

        <div className= "row mt-5 d-flex justify-content-center">
        <h1 className= "font-weight-bold d-flex justify-content-center mb-4">Add New Timeslots</h1>
         <div className= "col col-md-12 d-flex justify-content-center mt-2">
         <form onSubmit= {handleSubmit}>
         <label className= " admin-class">Start Slot</label>
           <input 
             type="text"
             name="startslot"
             className= "form-control"
             placeholder= "Start Slot" 
                onChange= {(e) => setStartslot(e.target.value)}
                value= {startslot}   
                autoFocus         
            />
            <input 
             type="text"
             name="endslot"
             className= "form-control"
             placeholder= "End Slot" 
                onChange= {(e) => setEndslot(e.target.value)}
                value= {startslot} 
             />          

         </form>        
        
        </div>
        </div>
    )

}

export default TimeslotCreate;