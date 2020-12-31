import _ from "lodash";
import { CREATE_QUESTION} from "../actions/types";

export default (state= {}, action) => {
   switch (action.type) {
    case CREATE_QUESTION :
        return { ...state, [action.payload.id]  : action.payload}

    default:
        return state;
    }
}