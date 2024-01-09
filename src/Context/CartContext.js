import { createContext, useContext, useState } from "react";

const MyContext = createContext();

//custom hook
export  const useMyContext = () => {
    return useContext(MyContext);

}
// useContext(MyContext); 
//React Hook "useContext" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function

export const MyContextProvider = ({ children }) => {
    const [ cart, setCart] =  useState([]);
   
    const myObj = {
        cart,
        setCart,
    }
   
    return <MyContext.Provider value={myObj}>{children}</MyContext.Provider>
}