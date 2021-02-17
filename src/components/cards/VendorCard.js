import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Card} from "antd";
import {EyeOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import SubcategoriesDelete from "../admin/Subcategories/SubcategoriesDelete";

const {Meta} = Card;
const VendorCard= ({vendor}) => {

   const [subcats, setSubcats] = useState([]);
    console.log("Values from VENDOR CARD", {vendor});
    const {_id,vendorInfoId, images, description, subcategories} = vendor;

    useEffect( () => {
      fetchSubcats();
    },[]);

    const fetchSubcats= () => {
        subcategories.map( (sub) => { setSubcats(sub.name||",")           
         })
    }
     
     
     return (
         <Card cover= {
            <img src= { images && images.length ? images[0].url : ""} 
                 style= {{ height: "150px", objectFit: "cover"}}
            />
         }
         actions= {[ <Link to= {`/vendor/vendoredit/${_id}`}>
                      <EyeOutlined  className= "text-warning" /> <br />View Vendor Details
                      </Link>,
                     <Link to= {`/vendor/vendorcatdelete/${_id}`}>
                      <ShoppingCartOutlined  className= "text-danger" /><br />Select Vendor
                      </Link>
                 ]}
         >
           <Meta title= {vendorInfoId.name} description= {subcats} />                                         
         </Card>
     )
}

export default VendorCard;