import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store } from "./redux/store";
// import persistStore from "redux-persist/es/persistStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  // <PersistGate persistor={persistStore}>
  <App />
  // </PersistGate>
  // </Provider>
);
