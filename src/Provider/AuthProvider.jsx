import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('email: as')

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    

    //google and github create account
    const googleandgithub = (provider) => {
       return signInWithPopup(auth, provider)
       
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        login,
        googleandgithub,

    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;
