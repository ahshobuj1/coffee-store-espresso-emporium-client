import {NavLink, Outlet} from 'react-router-dom';

function App() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex p-5 space-x-10">
                <NavLink to="/add-coffee" className="btn btn-neutral btn-sm">
                    Add Coffee
                </NavLink>
            </div>
            <Outlet />
        </div>
    );
}

export default App;
