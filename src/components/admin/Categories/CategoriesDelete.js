import React, {Component} from "react";
import {reduxForm} from "redux-form";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import {fetchCategory, deleteCategory} from "../../../actions";
import AdminMenu from "../AdminMenu";
import Modal from "../../Modal";
import history from "../../../history";

class CategoriesDelete extends Component
{
 componentDidMount() {
    this.props.fetchCategory(this.props.match.params.id);
 }

 addRoute() {
   return("/admin/categories/categoriescreate");
  } 
     
    renderActions() {
      return (
         <React.Fragment>
         <button onClick= { () => this.props.deleteCategory(this.props.match.params.id)} type="submit" className=" btn btn-danger primary-button mr-3">Yes</button>
         <Link to= "/admin/categories/categoriesList" type="button" className= "btn btn-secondary primary-button">No</Link>
         </React.Fragment>
         );
    }

    renderContent() {
       if(!this.props.category) {
          return ("Are you sure you want to delete this category?");
       }
          return(`Are you sure you want to delete the category: ${this.props.category.name}`);
    }    

    
  render() { 
   
   return(
   <div>
       <AdminMenu  
        addRoute= {this.addRoute()}

        />         
        <Modal 
            title= "Delete a Category"
            content= {this.renderContent()}
            actions= {this.renderActions()}
            onDismiss = {() => history.push("/admin/categories/categorieslist") }
         />
    </div>    
     );
}
}


function mapStateToProps(state, ownProps) {
   console.log("In state:",state.form);
   return { category: state.categories[ownProps.match.params.id]};
}

const formWrapped = 
  reduxForm({
   form: "categoryForm"  
})(CategoriesDelete);

export default connect(mapStateToProps, {fetchCategory, deleteCategory})(formWrapped);
