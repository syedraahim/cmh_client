import _ from "lodash";
import { CREATE_QUESTION,
         FETCH_QUESTIONS } from "../actions/types";

export default (state= {}, action) => {
    console.log("Action values from question reducer :",action);
   switch (action.type) {
    case CREATE_QUESTION :
         return { ...state, [action.payload.id]  : action.payload}
    case FETCH_QUESTIONS :
         return {...state, ..._.mapKeys(action.payload, '_id' )}
    default:
        return state;
    }
}