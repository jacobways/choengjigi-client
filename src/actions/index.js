import axios from 'axios'

export const LOAD_DB_PRODUCT = "LOAD_DB_PRODUCT";

export const loadDBProduct = () => {
  const data = axios.get(`${process.env.REACT_APP_SERVER_API}/product`)
  .then(res => {
    return res.data.data
  });
  return {
    type: LOAD_DB_PRODUCT,
    payload: data,
  };
}

export const SET_QUANTITY = "SET_QUANTITY"

export const setQuantity = (id, quantity) => {
  return {
    type: SET_QUANTITY,
    payload: {
      id, quantity
    }
  }
}


export const INITIALIZE_QUANTITY = "INITIALIZE_QUANTITY"

export const initializeQuantity = () => {
  return {
    type: INITIALIZE_QUANTITY
  }
}


export const CHECK_FILTER = "CHECK_FILTER"

export const checkFilter = (category) => {
  return {
    type: CHECK_FILTER,
    payload: {
      category
    }
  }
}

export const SELECT_ALL_FILTER = "SELECT_ALL_FILTER"

export const selectAllFilter = () => {
  return {
    type: SELECT_ALL_FILTER,
  }
}

export const CLEAR_ALL_FILTER = "CLEAR_ALL_FILTER"

export const clearAllFilter = () => {
  return {
    type: CLEAR_ALL_FILTER,
  }
}

export const UPDATE_TOKEN = "UPDATE_TOKEN"

export const updateToken = (token) => {
  return {
    type: UPDATE_TOKEN,
    payload: token
  }
}


export const DELETE_TOKEN = "DELETE_TOKEN"

export const deleteToken = () => {
  return {
    type: DELETE_TOKEN,
  }
}


