import React from "react";
import {Card} from "antd";
import {Link} from "react-router-dom";
import {HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
const {Meta} = Card;

const SingleVendor= ({vendor}) => {

    const {_id,vendorInfoId,category,subcategories, images, description, pricetype,price} = vendor;
    return (
        <div className="row">
            <div className= "col col-md-6">Image Carousel</div>
            <div className= "col col-md-6 font-weight-bold h6">
            <Card
              actions= {[ <Link to= {`/vendor/${_id}`}>
                      <ShoppingCartOutlined  className= "text-success" /> <br />Select Vendor
                      </Link>,
                     <Link to= {`/vendor/vendorcatdelete/${_id}`}>
                      <HeartOutlined  className= "text-danger" /><br />Add to Wishlist
                      </Link>
                 ]}
            >
              
              <Meta title= {_id} description= {description} />  

            </Card>
                  {/* {vendor.category.name}              */}
                  {description}
            </div>
            {JSON.stringify(vendor)}
        </div>
        

    )

}

export default SingleVendor;