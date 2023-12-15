import { combineReducers, configureStore } from '@reduxjs/toolkit'

import visitorReducer from "./slices/Visitor";

const rootReducer = combineReducers({
   
    visitors :visitorReducer
  });



const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    // Add middleware, devtools, etc. if needed
  });



export default store;