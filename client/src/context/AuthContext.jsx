import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [authUser, setAuthUser] = useState(
      JSON.parse(localStorage.getItem("authUser")) || null
    ); ;
    console.log(localStorage.getItem("authUser"), "from auth context.jsx");
    return <AuthContext.Provider value={{authUser, setAuthUser}} >
        {children}
    </AuthContext.Provider>
}



/**
 * The useAuth function returns the authentication context using React's useContext hook.
 */
export const useAuthContext = () => useContext(AuthContext);