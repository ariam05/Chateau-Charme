import { useContext, useEffect, useState } from "react";
import { auth } from "../../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currUser, setCurrUser] = useState(null);
    const [userLoggedin, setUserLoggedin] = useState(false);
    const [loading, setLoading] = useState(true);

    //user login/logged out
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser)
        return unsubscribe;
    }, [])

    // function for initializeUser, when user logs in
    async function initializeUser(user) {
        if(user) {
            setCurrUser({...user}); // spreading out user prop into new object
            setUserLoggedin(true);
        }
        else {
            setCurrUser(null);
            setUserLoggedin(false);
        }
        setLoading(false);
    }
    //expose current user, if user is logged in/logged out, loading state
    const value = {
        currUser,
        userLoggedin,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {(!loading && children)}
        </AuthContext.Provider>
    )
}

