import React from "react";
import {connect} from "react-redux";
import {fetchCategories, fetchSubcategories} from "../actions";
import ListSubcategories from "./utils/ListSubcategories";
import VendorField from "./vendor/VendorField";

class MainBody extends React.Component {

  componentDidMount() {
    this.props.fetchCategories();   
  }

   renderFields() {
     return(
     
      this.props.category && this.props.category.map( categoryval => {       
           return(            
              <div className= "col col-lg-4 main-class font-weight-bold" key= {categoryval._id}>
                  <p>  {categoryval.name } </p> 
                 <img src= {categoryval.imgURL}></img> 
                 
                 <ListSubcategories 
                   categoryValue = {categoryval.name} />                
               
              </div>                                      
           ) 
        }) 
    ) } 
    
   
   
 render()
 {
  return (
  <div>
 <section className="feature-class" id="features">
  <div className="container-fluid">
    <div className="row">
      <div className="features col-lg-4 col-md-3">
       <h3> <i className="fab fa-hire-a-helper icon-class"></i></h3>
         <h3 className="feature-header"> Get the best help</h3>
        <p className="feature-text">We will find the best helper for your needs</p>
       </div>
       <div className="col-lg-4 col-md-6">
         <h3><i className="fas fa-money-bill-wave icon-class"></i></h3>
         <h3 className="feature-header"> Find the best price</h3>
         <p className="feature-text">Compare the price to find the most affordable helper</p>
       </div>
       <div className="col-lg-4 col-md-6">
         <h3><i className="fab fa-gratipay icon-class"></i></h3>
         <h3 className="feature-header"> Easy to use</h3>
        <p className ="feature-text">So easy to use that you will have your help sorted in minutes</p>
      </div>
    </div>
     </div>   
  </section>
  
  <section className= "content-section" >
   <div className= "container-fluid">
   <div className= "row content-header">
       {this.renderFields()} 
    
   </div>   
   </div>        
  </section> 
  

   <section className ="testimonial-section">
   <div className="row">
    <div className="col">
       <h1> We are here to provide the best help to you at the best price</h1>
     </div>
   </div>
   </section>
   </div>
  )
}

}

const mapStateToProps = (state) => {
   return ( { category: Object.values(state.categories)}        
  );
}

export default connect(mapStateToProps, {fetchCategories, fetchSubcategories})(MainBody);
