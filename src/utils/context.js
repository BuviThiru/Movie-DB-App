import { createContext, useContext, useState } from "react";
import useFetchdata from "./useFetchdata";

const AppContext = createContext()

const AppProvider = ({children}) =>{
    const [query,setQuery] = useState("Action");
    const {isLoading, error,data} = useFetchdata(`&s=${query}`)

    return (
        <AppContext.Provider value={{isLoading,query,setQuery,error,data}}>
            {children}
        </AppContext.Provider>
    )} ;

    export const MovieContext =()=> useContext(AppContext);

    export {AppProvider}