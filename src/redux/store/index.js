import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import mainReducer from "../reducers";

const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  mainReducer,
});
const persistedReducers = persistReducer(persistConfig, rootReducer);
export const store = configureStore({ reducer: persistedReducers });

export const persiStore = persistStore(store);
