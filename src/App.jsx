import {useContext} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import {AuthContext} from './Providers/AuthProvider';

function App() {
    const {user, loggedOutUser} = useContext(AuthContext);

    const handleLoggedOut = () => {
        loggedOutUser()
            .then(() => console.log('user logged out'))
            .catch((err) => console.log(err.message));
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex p-5 space-x-10">
                <NavLink to="/">
                    <button className="btn btn-sm btn-secondary ">Home</button>
                </NavLink>

                <NavLink to="/add-coffee" className="btn  btn-sm btn-secondary">
                    Add Coffee
                </NavLink>

                <NavLink to="/signup" className="btn  btn-sm btn-secondary">
                    Sign up
                </NavLink>

                <NavLink to="/view-users" className="btn  btn-sm btn-secondary">
                    View users
                </NavLink>

                <p>
                    {user ? (
                        <>
                            <span>{user.email}</span>
                            <button
                                onClick={handleLoggedOut}
                                className="btn btn-neutral btn-sm ml-2">
                                Sign out
                            </button>
                        </>
                    ) : (
                        <NavLink
                            to="/signin"
                            className="btn  btn-sm btn-secondary">
                            Sign in
                        </NavLink>
                    )}
                </p>
            </div>
            <Outlet />
        </div>
    );
}

export default App;
