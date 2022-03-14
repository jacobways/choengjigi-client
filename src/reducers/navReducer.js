import { NAV_HOME, NAV_INTRO, NAV_MARKET, NAV_CART, NAV_COMMUNITY } from "../actions/nav";
import { initialState } from "./initialState";

export default function navReducer ( state = initialState, action ) {

  switch(action.type) {

      case NAV_HOME: {
    
        return { 
          ...state, 
          nav: {
            home: true,
            intro: false,
            market: false,
            cart: false,
            community: false,
          } 
        }
      }

      case NAV_INTRO: {
    
        return { 
          ...state, 
          nav: {
            home: false,
            intro: true,
            market: false,
            cart: false,
            community: false,
          } 
        }
      }

      case NAV_MARKET: {
    
        return { 
          ...state, 
          nav: {
            home: false,
            intro: false,
            market: true,
            cart: false,
            community: false,
          } 
        }
      }

      case NAV_CART: {
    
        return { 
          ...state, 
          nav: {
            home: false,
            intro: false,
            market: false,
            cart: true,
            community: false,
          } 
        }
      }

      case NAV_COMMUNITY: {
    
        return { 
          ...state, 
          nav: {
            home: false,
            intro: false,
            market: false,
            cart: false,
            community: true,
          } 
        }
      }
      
      case NAV_HOME: {
    
        return { 
          ...state, 
          nav: {
            home: true,
            intro: false,
            market: false,
            cart: false,
            community: false,
          } 
        }
      }
      

    default:
      return state;
  }
}

