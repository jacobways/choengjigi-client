
import { LOAD_DB_PRODUCT, SET_QUANTITY, CHECK_FILTER, SELECT_ALL_FILTER, CLEAR_ALL_FILTER, INITIALIZE_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

export default function productReducer ( state = initialState, action ) {

  switch(action.type) {

    case LOAD_DB_PRODUCT: {

      const productState = action.payload;


      const quantityArr = state.quantity;

      const quantityState = productState.map((product) => {
        const id = product.id;
        let quantityValue;
        const previousState = quantityArr.filter(el => el.id === id)

        if (previousState.length ===0) {
          quantityValue = 0;
        } else {
          quantityValue = previousState[0].quantity;
        }
        return {id, quantity: quantityValue}
      })


      const filterObj = state.filter;

      // const categoryArr = [...new Set( productState.map(product => product.category) )]; // 익스플로러 사용 불가

      const CategoryDupArr = productState.map(product => product.category);
      const categoryArr = CategoryDupArr.filter((category, idx) => {
        return CategoryDupArr.indexOf(category) === idx
      })

      let filterState = {}

      for (let category of categoryArr) {

        if (category in filterObj) {
           filterState[category] = filterObj[category]
        } else {
          filterState[category] = true;
        }

      }

  

      // let filterState = state.filter;

      // if (filterState.length ===0) {
      //   filterState = productState.map(product => { return {id: product.id, checked: true} })
      
      // } else {
      //   filterState.filter(el => {
      //     for (let product of productState) {
      //       if (el.id === product.id) return true;
      //     }
      //   })
        
      //   loop1: 
      //   for (let product of productState) {
          
      //     loop2:
      //     for (let ele of filterState) {
      //       if(product.id === ele.id) continue loop1;
      //     }
      //     filterState.push({id:product.id, checked: true})

      //   }
      // }

      return {...state, product: productState, filter: filterState, quantity: quantityState}
    }


      case SET_QUANTITY: {
    
        const quantityArr = state.quantity;
  
        // findIndex 메소드는 인터넷 익스플로러 사용이 불가능해서 직접 제작
        function findIndex (arr) {
          for (let i=0; i<arr.length; i++) {
            if (arr[i].id === action.payload.id) return i;
          }
          return -1;
        }
  
        const idx = findIndex(quantityArr);
        let quantityState;
        if (idx === -1) {
          quantityState = [...quantityArr, action.payload]
        } else {
          quantityState = [...quantityArr.slice(0,idx), action.payload, ...quantityArr.slice(idx+1)]
        }
        return {...state, quantity: quantityState}
      }


      case INITIALIZE_QUANTITY: {
        const quantityArr = state.quantity;

        const quantityState = quantityArr.map(el => {
          return {id: el.id, quantity: 0}
        })
        return {...state, quantity: quantityState}
      }




      case CHECK_FILTER: {

        // let filterState = state.filter;

        // const checkedValue = !(state.filter[action.payload.category]);

        // filterState[action.payload.category] = checkedValue;

        const filterObj = state.filter;

        const filterState = {}
  
        // let newFilterState = {}

        for (let key in filterObj) {
          if (key === action.payload.category) {
            filterState[key] = !filterObj[key]
          } else {
            filterState[key] = filterObj[key]
          }
        }

        
     
        return {...state, filter: filterState}
      }
  
      case SELECT_ALL_FILTER: {

        const filterObj = state.filter;

        const filterState = {};

        for (let key in filterObj) {
          filterState[key] = true;
        }
  
        return {...state, filter: filterState}
      }
  
      case CLEAR_ALL_FILTER: {

        const filterObj = state.filter;

        const filterState = {};

        for (let key in filterObj) {
          filterState[key] = false;
        }
  
        return {...state, filter: filterState}
      }

    default:
      return state;
  }
}
