import {useContext} from 'react';
import {AuthContext} from '../Providers/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6

const ProtectedRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loader) {
        <span className="loading loading-spinner loading-lg"></span>;
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/signin" />;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
    children: PropTypes.node,
};
