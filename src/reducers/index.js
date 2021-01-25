import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import subcategoryReducer from "./subcategoryReducer";
import utilReducer from "./utilReducer";
import questionReducer from "./questionReducer";
import subcatQuestionReducer from "./subcatQuestionReducer";
import alertReducer from "./alertReducer";
import userReducer from "./userReducer";

export default combineReducers(
               { alert: alertReducer,
                auth: authReducer, 
                user: userReducer,              
                form: formReducer,
                categories: categoryReducer,
                subcategories: subcategoryReducer,
                util: utilReducer,
                questions: questionReducer,
                subquestion: subcatQuestionReducer
               });
