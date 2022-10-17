import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(true); /* Analisar se o usuário é válido */ 

    return(
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}