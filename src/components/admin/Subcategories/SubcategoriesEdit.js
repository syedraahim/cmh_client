import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import { reduxForm } from "redux-form";
import {fetchSubcategory, editSubcategory} from "../../../actions";
import AdminMenu from "../AdminMenu";
import SubcategoriesForm from "./SubcategoriesForm";

class SubcategoriesEdit extends Component
{

    componentDidMount() {
        console.log("From Subcategories edit  cdm initial values", this.props.subcategory.category.name);
        this.props.fetchSubcategory(this.props.match.params.id);        
    }

    addRoute() {
        return("/admin/subcategories/subcategoriescreate");
     } 
     
     onSubmit = (formValues) => {
      console.log("Form values from subcategory edit",formValues);
      if (formValues.category._id) {
        let updatedData = {
          _id: formValues._id,
          category: formValues.category.name,
          name: formValues.name
        }
        this.props.editSubcategory(this.props.match.params.id,updatedData);
      } else {
      this.props.editSubcategory(this.props.match.params.id,formValues);
      }
  }


     
    render() {
      {console.log("props from subcat edit", this.props)}
       if (!this.props.subcategory)  {        
        return (
           <div>Loading....</div>
        )} ; 

        return (
            <div>
             
              <AdminMenu 
                addRoute = {this.addRoute()}
              />
              <h1 className="category-head font-weight-bold card-header" > Edit Sub Categories </h1>
              {console.log("state", this.props.category)}
              <SubcategoriesForm
                initialValues = { this.props.category, this.props.subcategory}
                onSubmit= {this.onSubmit }
               /> 
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    console.log("state from mapstatetoprops edit", state);
     const subcategory = state.subcategories[ownProps.match.params.id]
   return ( { subcategory,
               initialValues: {
                     category:  subcategory.category.name,
                     name: subcategory.name
              } 
           }
            )
}

const formWrapped = reduxForm( { form: "subcategoriesEdit",
                                 keepDirtyOnReinitialize: true,
                                enableReinitialize: true,
                                 updateUnregisteredFields: true
                          })(SubcategoriesEdit)

export default connect(mapStateToProps, {fetchSubcategory, editSubcategory})
                      (formWrapped);