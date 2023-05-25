import { AppRegistry } from "react-native";
import React from "react";
import { expo as appName } from "./app.json";
import authReducer from "./State";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Index from "./index";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
