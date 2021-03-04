import React, {useState} from "react";
import {Card,Tabs, Tooltip} from "antd";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import VendorListItems from "./VendorListItems";
import StarRatings from  "react-star-ratings";
import StarRatingModal from "../Modal/StarRatingModal";
import {showAverageRating} from "../../actions/rating";
import _ from "lodash";

const {TabPane} = Tabs;

const SingleVendor= ({vendor, onRatingClick, rating}) => {

  const {user, cart} = useSelector((state) => ({...state}));
  const [tooltip, setTooltip] = useState('Click to add');

  const dispatch= useDispatch();
   
  console.log("Rating from single vendor",{rating});

    const {_id,vendorInfoId, images} = vendor;

    const handleAddToCart= () => {
      let cart = [];
      //check if the cart already has an item
      if ( typeof window !== "undefined") {
        if (localStorage.getItem("cart")) {
          cart= JSON.parse(localStorage.getItem("cart"))
        }
        cart.push({
          ...vendor,
          count: 1
        })
        let unique=_.uniqWith(cart,_.isEqual);
        console.log(unique);
        localStorage.setItem("cart",JSON.stringify(unique));
        setTooltip("Added");

        //add to redux store
        dispatch({
          type: "ADD_TO_CART",
          payload:unique
        });
        dispatch({
          type: "SET_VISIBLE",
          payload:true
        });
      }
    } 
    return (
        <div className="row">
            <div className= "col col-md-6">
              <Carousel showArrows={true} autoPlay infiniteLoop> 
                 {images && images.map( (i) => (
                      <img src= {i.url} key={i.public_id} />                 
                 )
                 )}
              </Carousel> 
            
           </div>
           
            <div className= "col col-md-6 font-weight-bold h6">
           { vendor ?  <h1 className="bg-info p-3">{vendorInfoId.name}</h1>
                    : <h1>Loading...</h1>}           
            { vendor && vendor.ratings && vendor.ratings.length > 0
              ? showAverageRating(vendor)
              : <div className= "d-flex justify-content-center mt-1 mb-3">"No rating yet"</div>
            }
             <Card
              actions= {[
                    <Tooltip title= {tooltip}>
                     <a onClick= {handleAddToCart}>
                      <ShoppingCartOutlined  className= "text-info" /><br />Select Vendor
                      </a>
                    </Tooltip>,
                     <Link to= {`/vendor/vendorcatdelete/${_id}`}>
                      <HeartOutlined  className= "text-danger" /><br />Add to Wishlist
                      </Link>,
                      <StarRatingModal>
                        <StarRatings 
                            starRatedColor= "red"
                            noOfStars= {5}
                            rating={rating}
                            changeRating= {onRatingClick}                            
                            name={_id}
                            isSelectable={true}
                         />
                       </StarRatingModal>
                       ]}    >
                 <VendorListItems vendor = {vendor}/>
            </Card>
                 
            </div>
          <div className="row">
            <Tabs type= "card">
              <TabPane tab= "More Details" key="1">
                  For any further queries, please call us on XXXX-XXX-XXXX
              </TabPane>
            </Tabs>
          </div> 
        </div>
        

    )

}

export default SingleVendor;