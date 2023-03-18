import React, { createContext, useContext, useState, useEffect } from 'react'

let mycontext = createContext();

const Context1 = ({ children }) => {
    const [timeC, setTimeC] = useState();
    const [dateC, setDateC] = useState();

  return (
      <mycontext.Provider value={{ timeC, setTimeC, dateC, setDateC }}>
          { children}
    </mycontext.Provider>
  )
}

export default Context1;
export {mycontext};
