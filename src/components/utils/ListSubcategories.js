import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchSubcategories} from "../../actions";
import {Link} from "react-router-dom";

class ListSubcategories extends Component {

    componentDidMount() {
       this.props.fetchSubcategories();
      }

      renderSubcategories() {        
         return(

            this.props.subcategory && this.props.subcategory.map( subcategoryval => {
          if(subcategoryval.category._id) {
             if (subcategoryval.category._id === this.props.categoryValue) {
             return(
              <div  key= {subcategoryval._id}>
                 <Link to= {subcategoryval.name} >{subcategoryval.name} </Link>
               </div>
             ) }
           }
           } )
         )
     }
    render () {
      if (!this.props.subcategory)  {
        return (
           <div>Loading....</div>
       )} ;       
      return(
       <div>
           {this.renderSubcategories()}
       </div>
      )
    }
}

const mapStateToProps = (state) => {
   return { subcategory: Object.values(state.subcategories)}  
  }

export default connect(mapStateToProps, {fetchSubcategories})(ListSubcategories);

