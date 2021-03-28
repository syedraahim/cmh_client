import React from "react";
import { Link } from "react-router-dom";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";

const TimeslotList= () => {

    const addRoute= () => {
        return("/admin/timeslot/timeslotcreate");
    }

    return (

        <div className= "row">
          <div className= "col col-md-2">
              <AdminNav />
           </div> 
           <div className= "col col-md-9">
              <AdminMenu
                addRoute= {addRoute()}
              />
           </div>
         

        </div>
    )
}

export default TimeslotList;