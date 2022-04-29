import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import reducer from "./reducer.js";

const store = createStore(reducer);

const App = () => {
  const getState = () => {
    return store.getState().good;
  };

  const good = () => {
    store.dispatch({
      type: "GOOD",
    });
  };

  return (
    <div>
      <button onClick={good}>good</button>
      <button>ok</button>
      <button>bad</button>
      <button>reset stats</button>
      <div>good {getState()}</div>
      <div>ok</div>
      <div>bad</div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
store.subscribe(App);
