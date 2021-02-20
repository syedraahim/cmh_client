import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchCategories} from "../actions/category";
import {fetchSubcategories} from "../actions/subcategory";
import ListSubcategories from "./utils/ListSubcategories";
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
              <div className= "col col-md-4 main-class font-weight-bold d-flex justify-content-center" key= {categoryval._id}>         
               
                  <Card style={{ width: 400}}                   
                  actions= {[ <Link to= {`/vendordetails/${categoryval.name}`} className= "font-weight-bold h5">
                       {categoryval.name}
                      </Link>                    
                 ]}
                   > 
                   <Card.Grid style={gridStyle}>                  
                       <img src= { categoryval.imgURL && categoryval.imgURL} className= "d-flex justify-content-center ml-2"
                     style= {{ height: "200px", width:"150px", objectFit: "none"}} /> 
                   </Card.Grid>
                   <Card.Grid style={gridStyle } hoverable={true}  className= "h6">
                   <ListSubcategories 
                        categoryValue = {categoryval._id} />  
                   </Card.Grid>                  
                  </Card>                               
                 </div>                                                 
           ) 
          }
        }) 
    ) } 
   
  
   return (
  <div>
 <section className="feature-class" id="features">
 <div className= "jumbotron-fluid font-weight-bold h1 text-danger d-flex justify-content-center mt-3 mb-3">
          <Jumbotron
             text= {["We will find the best helper for your needs",
                     "Compare the price to find the most affordable helper",
                     "So easy to use that you will have your help sorted in minutes"]}
           />         
      </div>
  </section>
  <section className= "content-section" >     
   <div className= "row">
       {renderFields()}     
   </div>         
  </section>   

   <section className ="testimonial-section">
   <div className="row">
    <div className="col mt-2 ">
       <h1> We are here to provide the best help to you at the best price</h1>
     </div>
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
