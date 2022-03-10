import { UPDATE_TOKEN, DELETE_TOKEN } from "../actions/index";
import { initialState } from "./initialState";

export default function userReducer ( state = initialState, action ) {

  switch(action.type) {

      case UPDATE_TOKEN: {
    
        const token = action.payload
        return { ...state, token: token }
      }

      case DELETE_TOKEN: {
        return {...state, token: null }
      }

    default:
      return state;
  }
}

