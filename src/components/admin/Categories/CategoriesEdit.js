import _ from "lodash";
import React, {Component} from "react";
import { connect } from "react-redux";
import { editCategory, fetchCategory} from "../../../actions/category";
import AdminMenu from "../AdminMenu";
import CategoriesForm from "./CategoriesForm";

class CategoriesEdit extends Component
{
  componentDidMount() {
      this.props.fetchCategory(this.props.match.params.id);
  }

  addRoute() {
   return("/admin/categories/categoriescreate");
  } 

  onSubmit = (formValues) => {
      this.props.editCategory(this.props.match.params.id,formValues);
  }
    
  render() { 
     if (!this.props.categories)  {
      return (
         <div>Loading....</div>
    )} ;
   return(
   <div>
     <AdminMenu addRoute= {this.addRoute()} />
     <h1 className="card-header font-weight-bold" > Edit Categories </h1>
    
     <CategoriesForm  
        initialValues =  { _.pick(this.props.categories, "name", "imgURL")}
        onSubmit= {this.onSubmit} />
          
    </div>   
  );
}
}

function mapStateToProps(state, ownProps) {
  
   return { categories: state.categories[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {editCategory, fetchCategory})(CategoriesEdit);



