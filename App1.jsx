import React from 'react'
import { View } from "react-native";
import App from './App';
import Context1 from "./component/Context1";

const App1 = () => {
  return (
    <>
      <Context1>
        <App />
      </Context1>
    </>
  )
}

export default App1
