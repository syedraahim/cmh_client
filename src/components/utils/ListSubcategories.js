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
        console.log("props from list subcategories",this.props);
         return(
           this.props.subcategory && this.props.subcategory.map( subcategoryval => {
             if (subcategoryval.category._id === this.props.categoryValue) {
             return(
                <div  key= {subcategoryval._id}>
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
   return { subcategory: Object.values(state.subcategories)}  
  }

export default connect(mapStateToProps, {fetchSubcategories})(ListSubcategories);

