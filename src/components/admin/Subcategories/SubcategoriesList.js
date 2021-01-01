import React from "react";
import {connect } from "react-redux";
import {fetchSubcategories} from "../../../actions";
import AdminMenu from "../AdminMenu";


class SubcategoriesList extends React.Component {

 componentDidMount() {
     this.props.fetchSubcategories();
 }   

 addRoute() {
    return("/admin/categories/categoriescreate");
 }

 renderList() {

    
     <div>
        SubcategoryList
         console.log(this.props._subcategory);

     </div>
 }

render() {

  return(
    <div>
       SubcategoriesList

    </div>

  )  
}

}

const mapStateToProps = (state) => {
   return {subcategories: Object.values(state.subcategories)  }
}

export default connect(mapStateToProps, {fetchSubcategories})(SubcategoriesList);