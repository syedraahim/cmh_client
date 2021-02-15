import React from "react";
import {Card} from "antd";
import {Link} from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const {Meta} = Card;

const AdminVendorCard = ({cat}) => {
    console.log("values from CAT", {cat})
    const {email, description, category, subcategories,images,_id} = cat;
  return (
      <Card  cover= {
          <img src= { images && images.length ? images[0].url : ""} 
               style= {{ height: "150px", objectFit: "cover"}}
          />
      }
         actions= {[ <Link to= {`/admin/vendors/vendorcatedit/${_id}`}>
                      <EditOutlined  className= "text-warning" />
                      </Link>,
                     <Link to= {`/vendor/vendorcatdelete/${_id}`}>
                      <DeleteOutlined  className= "text-danger" />
                      </Link>
                 ]}
      >


        <Meta title= {email} description= {`${description && description.substring(0,50)}....`} />
      </Card>
  )
}

export default AdminVendorCard;

