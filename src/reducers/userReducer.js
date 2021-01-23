import { useReducer } from "react";
import { actionTypes } from "redux-form";
import {
    LOGGED_IN_USER,
    LOGOUT
} from "../actions/types";

 const useReducer= (state = null, action) => {
switch(action.type) {
    case LOGGED_IN_USER:
        return action.payload;
    case LOGOUT:
        return action.payload;
    case DEFAULT:
        return state;
}
}
export default userReducer;