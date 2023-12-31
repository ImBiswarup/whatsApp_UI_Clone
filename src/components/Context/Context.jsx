import React, { useState, createContext, useEffect } from 'react';


export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [name, setName] = useState("Biswarup");
  const [phone, setPhone] = useState("");

  const handleOnChange = (e) => setName(e.target.value);
  const handleOnChangePhone = (e) => setPhone(e.target.value);

  function GFG_Fun() {
    const input = document.getElementById("input");
    input.addEventListener("mousewheel", () => input.blur());
  }


  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        phone,
        setPhone,
        handleOnChange,
        handleOnChangePhone,
        GFG_Fun,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;

