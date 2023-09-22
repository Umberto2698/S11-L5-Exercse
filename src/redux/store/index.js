import { configureStore } from "@reduxjs/toolkit";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";
// import storage from "redux-persist/lib/storage";
import mainReducer from "../reducers";

// const persistConfig = {
//   key: "root",
//   storage: storage,
// };

// const persistedReducers = persistReducer(persistConfig, rootReducer);
const store = configureStore({ reducer: mainReducer });

export default store;
// export const persiStore = persistStore(store);
