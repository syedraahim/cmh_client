import _ from "lodash";
import React, {Component} from "react";
import { connect } from "react-redux";
import { editCategory, fetchCategory} from "../../../actions";
import AdminMenu from "../AdminMenu";
import CategoriesForm from "./CategoriesForm";

class CategoriesEdit extends Component
{
  componentDidMount() {
     console.log("From fetchCategory:",this.props);
     this.props.fetchCategory(this.props.match.params.id);
  }

  addRoute() {
   return("/admin/categories/categoriescreate");
  } 

  onSubmit = (formValues) => {
     console.log("from form values",formValues);
     this.props.editCategory(this.props.match.params.id,formValues);
  }
    
  render() { 
   console.log("From edit component",this.props);
   if (!this.props.categories)  {
      return (
         <div>Loading....</div>
    )} ;
   return(
   <div>
     <AdminMenu addRoute= {this.addRoute()} />
     <h1 className="category-head font-weight-bold card-header" > Edit Categories </h1>
     <CategoriesForm  
        initialValues =  {_.pick(this.props.categories, "name", "imgURL")}
        onSubmit= {this.onSubmit} />
    {/* <form onSubmit= {this.props.handleSubmit(() => this.props.editCategory(this.props.formValues.values))}> */}
       
    </div>   
  );
}
}

function mapStateToProps(state, ownProps) {
  
   return { categories: state.categories[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {editCategory, fetchCategory})(CategoriesEdit);



