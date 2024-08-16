import {NavLink, Outlet} from 'react-router-dom';

function App() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex p-5 space-x-10">
                <NavLink to="/">
                    <button className="btn btn-sm btn-secondary ">Home</button>
                </NavLink>

                <NavLink to="/add-coffee" className="btn  btn-sm btn-secondary">
                    Add Coffee
                </NavLink>
            </div>
            <Outlet />
        </div>
    );
}

export default App;
