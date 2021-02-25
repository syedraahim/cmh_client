import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchCategories} from "../actions/category";
import {fetchSubcategories} from "../actions/subcategory";
import ListSubcategories from "./utils/ListSubcategories";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {EyeOutlined} from "@ant-design/icons";
import {Avatar,Card} from "antd";
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
              <div className= "col col-md-4 main-class font-weight-bold p-1" key= {categoryval._id}>         
               
                        
                   <Link to= {`/vendordetails/${categoryval.slug}`} 
                        className= "font-weight-bold h5  text-dark ml-2">
                       {categoryval.name}
                    </Link> 
                        
                 <div className= "btn btn-raised font-weight-bold float-right ">
                   <ListSubcategories 
                        categoryValue = {categoryval._id} />  
                </div>  
                <div className= "float-left ">
                <Avatar                  
                    src= {categoryval.imgURL}
                    size= {100}
                    className="category-img"
                  />
                </div>               
                                             
                 </div>                                                 
           ) 
          }
        }) 
    ) }    
  
 return (
 <div>
 <section className="feature-class" id="features">
 <div className= "jumbotron-fluid font-weight-bold h1 text-danger d-flex justify-content-center mb-2 ">
    <div className= "row">
      <div className= "col col-md-12 mb-5" style={{ padding:10, height:120, width:550}}>      
              {/* <Carousel showArrows={false} showThumbs= {false} autoPlay={true} infiniteLoop={true} transitionTime={200}> 
                 {categories && categories.map( (i) => (
                      <img src= {i.imgURL} key={i._id} />                 
                 )
                 )}
              </Carousel>              */}
           </div>  
      </div>     
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

const mapStateToProps = (state) => {
   return ( { category: Object.values(state.categories)}        
  );
}

export default connect(mapStateToProps, {fetchCategories, fetchSubcategories})(MainBody);
