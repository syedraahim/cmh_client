import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {fetchCategories} from "../actions/category";
import {fetchSubcategories} from "../actions/subcategory";
import ListSubcategories from "./utils/ListSubcategories";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import PostcodeSearch from "./utils/PostcodeSearch";
import {Avatar,Card, Col,Row} from "antd";
import Jumbotron from "./cards/Jumbotron";

const {Meta} = Card;
const gridStyle = {
  width: '50%',
  height:'200px',
  textAlign: 'left',
  border: 'none',   
};

const MainBody = () => {

  const [categories, setCategories] = useState([]);
  
  useEffect( () => {
    getSubcat();
  },[]);

  const getSubcat= () => {
    fetchCategories().then( res => setCategories(res.data));
  }
  const renderFields= () => {
     return(
     
     categories && categories.map( categoryval => {    
        if (categoryval._id)  { 
           return (            
              // <div className= "col col-md-4 main-class font-weight-bold p-1 d-flex justify-content-right "
              <Col span={8}
                  key= {categoryval._id}
                  className= "main-class font-weight-bold p-1 d-flex"
                   >         
                  <Col span={8} push={1}>
                      
                   <Link to= {`/vendordetails/${categoryval.slug}`} 
                        className= "font-weight-bold h5  text-dark ml-2">
                       {categoryval.name}
                    </Link> 
                    </Col>     
                 <Col span={10}
                      className= "btn btn-raised font-weight-bold mt-4">
                 <ListSubcategories 
                        categoryValue = {categoryval._id} />  
                </Col>  
                <Col span={8} className= "ml-4">
                <Avatar                  
                    src= {categoryval.imgURL}
                    size= {100}
                    className="category-img"
                  />
                </Col>               
                </Col>                              
                //  </div>                                                 
           ) 
          }
        }) 
    ) }    
  
 return (
 <div>
 <section className="feature-class" id="features">
 <div className= "font-weight-bold mt-2">           
         <PostcodeSearch />
 </div>  
        

  </section>
  <section className= "content-section" >     
   <div className= "row">
       {renderFields()}     
   </div>         
  </section>   

   <section className ="testimonial-section">
   
   <div className= "jumbotron-fluid font-weight-bold h1 text-danger d-flex justify-content-center mb-3">
          <Jumbotron
             text= {["We will find the best helper for your needs",
                     "Compare the price to find the most affordable helper",
                     "So easy to use that you will have your help sorted in minutes"]}
           />         
  </div>
   
   </section>
   </div>
  )
}


export default MainBody;
