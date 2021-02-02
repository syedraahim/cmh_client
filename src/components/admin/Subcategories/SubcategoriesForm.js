//form to display the jsx for create and edit subcategory form

import React from "react";
import { Field, reduxForm } from "redux-form";
import VendorField from "../../vendor/VendorField";
import { connect } from "react-redux";
import { fetchCategoriesName } from "../../../actions/category";
import RenderSelect from "../../utils/RenderSelect";

class SubcategoriesForm extends React.Component {

  componentDidMount() {
    this.props.fetchCategoriesName();
  }

  renderError(touched, error) {
    if (touched && error) {
      return (
        <div className="alert alter-danger mt-2">
          <div className="header">{error} </div>
        </div>
      )
    }
  }

  renderSelection({ input, meta }, categoryName) {
    return (
      <div className="form-group">
        <label htmlFor="category" className="font-weight-bold">Select a Category</label>

        <select className="form-control"  {...input}>
          <option value="">Select a category</option>
         
          {categoryName.length && categoryName[0].map(categoryval => {
            <option key={categoryval.name} value={categoryval.name}> {categoryval.name} </option>
          })}
        </select>
        {meta.touched && meta.error && <span>{meta.error}</span>}
      </div>
    )
  }
  renderFields() {

    return (
        <div className="form-group">
          <label htmlFor="category" className="font-weight-bold">Select a Category</label>
          <Field
            name="category"
            className="form-control"
            component="select"
          >
            {/* {console.log(this.props.initialValues.category.name,'initialValaues')} */}
            <option value="">{this.props.initialValues ? this.props.initialValues.category.name : 'Select a category'}</option>
            {console.log("Props from subcategoryForm", this.props)}
            {this.props.categoryName[0] && this.props.categoryName[0].map(categoryval => {

              {
                if (this.props.initialValues && this.props.initialValues.category.name != categoryval.name || !this.props.initialValues)
                  return <option key={categoryval.name} value={categoryval.name}> {categoryval.name} </option>                  
              }
            })
            }
          </Field>

        <Field
          label="Subcategory"
          type="text"
          name="name"
          placeholder="Enter a subcategory"
          component={VendorField} >
        </Field>
      </div>

    );
  }

  onSubmit = (formValues) => {
    console.log("formvalues from subcat edit SUBMIT",formValues);
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <div>

        <div className="container">
          <div className="card mt-2 mb-2" >
            <div className="card-body">
              <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="row" >
                  <div className="col">
                    {this.renderFields()}
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-2 ">
                  <button type="submit" className="btn btn-primary font-weight-bold">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

function validate(values) {

  const errors = {};
  console.log(values,'category')
  if (!values.category) {
    errors.category = "Please select a category";
  }
  if (!values.name) {
    errors.name = "Please enter a subcategory";
  }

  return errors;
}

const mapStateToProps = (state) => {
  console.log("state from map state subcategories form:", state);
  return ({ categoryName: Object.values(state.util) }
  );
}

const formWrapped = reduxForm({
  form: "subcategoriesForm",
  validate
})(SubcategoriesForm);

export default connect(mapStateToProps, { fetchCategoriesName })(formWrapped);