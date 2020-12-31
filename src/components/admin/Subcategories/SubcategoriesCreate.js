import React from "react";
import { Field, reduxForm } from "redux-form";
import {connect} from "react-redux";
import VendorField from "../../vendor/VendorField";
import AdminMenu from "../AdminMenu";
import { fetchCategoriesName } from "../../../actions";
// import validateEmail from "../../../utils/validateEmail";

class SubcategoriesCreate extends React.Component {  

  componentDidMount() {
     console.log("Props values from subcategories create:", this.props);
      this.props.fetchCategoriesName();
    }
  
   addRoute() {
     return("/admin/subcategories/subcategoriescreate");
   }

     renderFields() {
       
        return(
        <div>
          <Field
            label= "Select a Category"
            name= "category"
            component= "select" >
            <option> { fetchCategoriesName()} </option>                   
           </Field>
           <Field
            label= "Subcategory"
            type= "text"
            name= "subcategory"
            placeholder= "Enter a subcategory"
            component= {VendorField} />            
        </div>
        );
     }

    render() {       
            return (
             <div>
             <AdminMenu 
               addRoute = {this.addRoute}
             />
             <h1 className= "font-weight-bold card-header "> Add New Subcategory</h1> 
             <div className= "container">
             <div className= "card mt-2 mb-2" >
              <div className= "card-body">
              <form>
                <div className= "row" >
                   <div className= "col">
                     {this.renderFields()}   
                  </div>
                </div>
                <div className= "d-flex justify-content-center mt-2 ">
                  <button type="submit" className= "btn btn-primary font-weight-bold primary-button">Add</button>
                </div>
              </form>
              </div>
             </div>
             </div>
            </div>
            );
        
    }
}

const mapStateToProps = (state) => {
     console.log("from map state subcategories:",state);
     return { categoryName: Object.values(state.util)};
    //  return(categoriesName: state.)
 }

function validate() {

    return( <div>
        In validate function
    </div>);
}

const formWrapped= reduxForm({ form: "subCategoriesCreate",
                              validate})(SubcategoriesCreate);


export default connect(mapStateToProps,{ fetchCategoriesName })(formWrapped);