import { useState, createContext, ReactNode, useEffect } from 'react';
import { clientAxios } from '../config/axios';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

type AuthLogin = {
    loggedIn: boolean;
}

interface AuthContextType {
    auth: AuthLogin; 
    setAuth: React.Dispatch<React.SetStateAction<AuthLogin>>; 
    logout: () => void;
}

type AuthProviderProps = {
    children: ReactNode
}
type errorAxios = {
    message: string
}
const AuthContext =  createContext<AuthContextType>({
    auth: { loggedIn: false }, // Valor inicial para el objeto de autenticación
    setAuth: () => {}, // Función de actualización inicial
    logout: () => {},
  });

const AuthProvider = ({children} : AuthProviderProps ) => {
    const [auth, setAuth] = useState<AuthLogin>({ loggedIn: false });
    useEffect( () => {
        const verifyUser = async() => {
            const token = localStorage.getItem('token');
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${token}`,
                }
            }

            try {
                const { data } = await clientAxios('/users/profile', config);
                setAuth(data);
                setAuth({ loggedIn: true });
            } catch (error) {
                setAuth({ loggedIn: false });
                // Si es un error de Axios
                if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError<errorAxios>;
                    if (axiosError.response && axiosError.response.data && axiosError.response.data.message) {
                    // Si hay un mensaje de error en la respuesta del servidor, lo mostramos
                    const errorMessage = axiosError.response.data.message;
                    toast.error(errorMessage, {duration: 4500});
                    return; // Importante: salir de la función después de manejar el error
                    }
                }
                // Si no es un error de Axios o no hay un mensaje específico en la respuesta, mostramos un mensaje genérico de error
                toast.error('An unexpected error has occurred, try again later.', {duration: 4500});
            }
        }
        verifyUser();
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({ loggedIn: false });
    }

    return (
        <AuthContext.Provider value={{auth, setAuth, logout}}>
            {children}
        </AuthContext.Provider>

    )
}

export {
    AuthProvider,
}

export default AuthContext;