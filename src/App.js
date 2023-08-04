import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Calculator from "./components/Calculator";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Calculator</h1>
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
