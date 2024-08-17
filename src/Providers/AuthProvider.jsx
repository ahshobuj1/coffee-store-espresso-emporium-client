import {createContext, useState} from 'react';
import PropTypes from 'prop-types'; // ES6
import auth from '../firebase/firebase.config';
import {createUserWithEmailAndPassword} from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    //const [user, setUser] = useState('');
    const [loader, setLoader] = useState(true);

    // Create user with email password
    const signUpWithEmail = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {loader, signUpWithEmail};

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
};
