import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import subcategoryReducer from "./subcategoryReducer";
import utilReducer from "./utilReducer";
import questionReducer from "./questionReducer";

export default combineReducers(
               {auth: authReducer,               
                form: formReducer,
                categories: categoryReducer,
                subcategories: subcategoryReducer,
                util: utilReducer,
                question: questionReducer
               });
