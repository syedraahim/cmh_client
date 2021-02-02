import React, {Component} from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import AdminMenu from "../AdminMenu";
import { fetchSubcategory, deleteSubcategory} from "../../../actions/subcategory";
import Modal from "../../Modal";
import history from "../../../history";

class SubcategoriesDelete extends Component {
   
      componentDidMount() {
         console.log("Props from CDM:", this.props);
         this.props.fetchSubcategory(this.props.match.params.id);
      }

     addRoute() {
         return("/admin/subcategories/subcategoriescreate");
     }

     renderContent() {
       
             if(!this.props.subcategory) {
               return ("Are you sure you want to delete this subcategory?");
            }
               return(`Are you sure you want to delete the subcategory: ${this.props.subcategory.name}`);
       }
    

     renderActions() {
        return (
             <React.Fragment>
              <button onClick= { () => this.props.deleteSubcategory(this.props.match.params.id)} type="submit" className=" btn btn-danger primary-button mr-3">Yes</button> 
             <Link to= "/admin/subcategories/subcategoriesList" type="button" className= "btn btn-secondary primary-button">No</Link>
             </React.Fragment>
            );
     }
        


    render() {
       
        return (
         <div>
           
             <AdminMenu 
                 addRoute = {this.addRoute()}
             />
 
          <Modal 
            title= "Delete a SubCategory"
            content= {this.renderContent()}
            actions= {this.renderActions()}
            onDismiss = {() => history.push("/admin/subcategories/subcategorieslist") }
         /> 
         </div>
        )
    }

}

 const mapStateToProps= (state, ownProps) =>
  {
   console.log("State from mapState subcategories",state);
   console.log("Own props from mapState", ownProps);
   return { subcategory: state.subcategories[ownProps.match.params.id] };
  }

  const formWrapped = 
  reduxForm({
   form: "subcategoryForm"  
})(SubcategoriesDelete);

export default connect(mapStateToProps,{fetchSubcategory, deleteSubcategory} ) (formWrapped);