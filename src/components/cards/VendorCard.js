import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Card} from "antd";
import {EyeOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {showAverageRating} from "../../actions/rating";


const {Meta} = Card;
const VendorCard= ({vendor}) => {

   const [subcats, setSubcats] = useState([]);   
    const {_id,vendorInfoId, images, description, subcategories,price,pricetype} = vendor;

    useEffect( () => {
      fetchSubcats();
    },[]);

    const fetchSubcats= () => {
        subcategories.map( (sub) => { setSubcats(sub.name||",")           
         })
    }
     
     
     return (
       <div>
        { vendor && vendor.ratings && vendor.ratings.length > 0
              ? showAverageRating(vendor)
              : <div className= "d-flex justify-content-center mt-1 mb-3">"No rating yet"</div>
        }
         <Card cover= {
            <img src= { images && images.length ? images[0].url : ""} 
                 style= {{ height: "180px", objectFit: "cover"}}
            />
         }
         actions= {[ <Link to= {`/vendordetails/${_id}`}>
                      <EyeOutlined  className= "text-warning" /> <br />View Vendor Details
                      </Link>,
                     <Link to= {`/vendor/vendorcatdelete/${_id}`}>
                      <ShoppingCartOutlined  className= "text-info" /><br />Select Vendor
                      </Link>
                 ]}
         >
           <Meta title= {`${vendorInfoId.name}-£${price} ${pricetype}`} description= {subcats} />                                         
         </Card>
       </div>
     )
}

export default VendorCard;