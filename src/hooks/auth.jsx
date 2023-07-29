import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try{
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodexplorer:token", token);
           
            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user, token });
            
        } catch (error) {
            
            if(error.response) {
                alert(error.response.data.error);
            } else { 
                alert("Não foi possível efetuar o login.");
                console.log(error);
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@foodexplorer:user");
        localStorage.removeItem("@foodexplorer:token");

        setData({});
    }

    useEffect(() => {
        const user = localStorage.getItem("@foodexplorer:user");
        const token = localStorage.getItem("@foodexplorer:token");

        if(user && token) {
            api.defaults.headers.authorization = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, []);

    return(
        <AuthContext.Provider value={{ 
                signIn, 
                signOut,
                user: data.user 
            }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);   
    return context;
}
export { AuthProvider, useAuth };  