import { map } from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchSubcategories} from "../../actions";
import {Link} from "react-router-dom";

class ListSubcategories extends Component {

    componentDidMount() {
          this.props.fetchSubcategories();
      }

      renderSubcategories() {
        console.log("From render subcategories",this.props);
         return(
           this.props.subcategory && this.props.subcategory.map( subcategoryval => {
             console.log("In subcat val", subcategoryval.category.name);
             console.log("In subcat category val", this.props);
             if (subcategoryval.category.name === this.props.categoryValue) {
             return(
                <div className= "col col-lg-6 " key= {subcategoryval._id}>
                 <Link to= {subcategoryval.name} >{subcategoryval.name} </Link>
              </div>
             ) }
           } )
         )
     }
    render () {
      return(
       <div>
           {this.renderSubcategories()}
       </div>
      )
    }
}

const mapStateToProps = (state) => {
    console.log("State from list subcategories", state);
    console.log("Object value from listSubcategories:", Object.values(state.subcategories));
    return { subcategory: Object.values(state.subcategories)}  
  }

export default connect(mapStateToProps, {fetchSubcategories})(ListSubcategories);

