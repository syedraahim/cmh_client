import React from "react";
import {Card} from "antd";

const {Meta} = Card;

const AdminVendorCard = ({cat}) => {

    const {email, description, category, subcategories,images} = cat;
  return (
      <Card  cover= {
          <img src= { images && images.length ? images[0].url : ""} 
               style= {{ height: "150px", objectFit: "cover"}}
          />
      }>
        <Meta title= {email} description= {description} />
      </Card>
  )
}

export default AdminVendorCard;