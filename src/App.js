import React from "react";
import UseEffectHook from "./ReactHooks/UseEffectHook";
import UseStateHook from "./ReactHooks/UseStateHook";
import "./App.css";
import UseEffectHookwin from "./ReactHooks/UseEffectHookwin";
import UseRef from "./ReactHooks/UseRef";
import UseCallBackHook from "./ReactHooks/UseCallBackHooks.js/UseCallBackHook";
import UseReducer from "./ReactHooks/UseReducerHook/UseReducer";
import UseReducerTodo from "./ReactHooks/UseReducerHook/UseReducerTodo";

function App() {
  return (
    <div className="App">
      {/*<UseStateHook />*/}
      {/*<UseEffectHook />*/}
      {/* <UseEffectHookwin />*/}
      {/*<UseRef />*/}
      {/*<UseCallBackHook />*/}
      {/*<UseReducer />*/}
      <UseReducerTodo />
    </div>
  );
}

export default App;
