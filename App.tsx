import React from "react";
import authReducer from "./State";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Navigator from "./Components/Navigation/Navigator";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
