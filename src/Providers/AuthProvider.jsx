import {createContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types'; // ES6
import auth from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loader, setLoader] = useState(true);

    // Create user with email password
    const signUpWithEmail = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login user with email
    const signInUserWithEmail = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log out user
    const loggedOutUser = () => {
        return signOut(auth);
    };

    // Get current users
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('current user', currentUser);
                setUser(currentUser);
                setLoader(false);
            } else {
                setUser('');
            }
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loader,
        signUpWithEmail,
        signInUserWithEmail,
        loggedOutUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
};
