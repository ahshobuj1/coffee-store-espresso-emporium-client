import {Link, NavLink, Outlet} from 'react-router-dom';

function App() {
    return (
        <>
            <div className="flex p-5 space-x-10">
                <NavLink to="/coffees" className="btn btn-neutral">
                    Coffee
                </NavLink>
                <NavLink to="/add-coffee" className="btn btn-neutral">
                    Add Coffee
                </NavLink>
            </div>
            <Outlet />
        </>
    );
}

export default App;
