import { createContext, useState } from "react";

export const initialState = {
  theme: {
    light : {
      nav: 'lightblue',
      home: 'white',
      footer: 'lightblue',
      color: 'black'
    },
    dark: {
      nav: 'rgba(60,75,129,1) 50%',
      home: 'rgba(1,1,56,1) 50%',
      footer: 'rgba(60,75,129,1) 50%',
      color: 'white'
    }
  }
}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  
  const [tema, setTema] = useState(initialState.theme.light);

  const handleTheme = () => {
    setTema((t)=>
    (t === initialState.theme.light
    ? initialState.theme.dark : initialState.theme.light))
  }

  

  return (
    <ContextGlobal.Provider value={{tema, handleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
