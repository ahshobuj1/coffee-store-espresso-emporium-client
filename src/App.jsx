import {NavLink, Outlet} from 'react-router-dom';

function App() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex p-5 space-x-10">
                <NavLink to="/coffees" className="btn btn-neutral">
                    Coffee
                </NavLink>
                <NavLink to="/add-coffee" className="btn btn-neutral">
                    Add Coffee
                </NavLink>
            </div>
            <Outlet />
        </div>
    );
}

export default App;
