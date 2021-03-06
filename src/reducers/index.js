import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'
import productReducer from "./productReducer";
import userReducer from "./userReducer"
import navReducer from "./navReducer"


const persistConfig = {
  key: 'root',
  storage: storageSession,
}

const rootReducer = combineReducers({
  productReducer,
  userReducer,
  navReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;