import React from "react";
import {Card} from "antd";
import {Link} from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import moment from "moment";

const {Meta} = Card;

const VendorCalCard = ({cal}) => {
   const start= moment(cal.availability[0].start).format('DD/MM/YYYY');
   const end= moment(cal.availability[0].end).format('DD/MM/YYYY');
   
  return (
      <Card>
        <b className= "mb-2">From: {start}   To : {end}  </b>
        
        {cal.availability[0].timeslots && cal.availability[0].timeslots.map ( (ts) => (
            <p key= {ts._id} className= "bg-info font-weight-bold ">{ts.startSlot}-{ts.endSlot}</p>
        )
        )}
      </Card>
  )
}

export default VendorCalCard;

