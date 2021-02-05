import _ from "lodash";
import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {fetchSubcategory, editSubcategory} from "../../../actions/subcategory";
import AdminMenu from "../AdminMenu";
import SubcategoriesForm from "./SubcategoriesForm";

const SubcategoriesEdit = ({match}) => 
{
    const {user} = useSelector( (state) => ({...state}));
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [subcat, setSubcat] = useState("");
    const [loading, setLoading] = useState(false);
    const slug= match.params.slug;

    useEffect( () => {
       getSubcat();
    });

    const getSubcat= () => {
       fetchSubcategory(slug).then( (res) => {
          setCategory= res.data.category
          setName= res.data.name
       }) 
      }

    const addRoute= () => {
        return("/admin/subcategories/subcategoriescreate");
     } 
     
    const onSubmit = (formValues) => {
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
     
   
      // {console.log("props from subcat edit", this.props)}
      //  if (!this.props.subcategory)  {        
      //   return (
      //      <div>Loading....</div>
      //   )} ; 

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

export default SubcategoriesEdit;