import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';
export const AuthProviders = createContext(null);
const AuthProvider = ({children}) => {
    return (
        <AuthProviders.Provider value ={useFirebase()}>
            {children}
        </AuthProviders.Provider>
    );
};

export default AuthProvider;