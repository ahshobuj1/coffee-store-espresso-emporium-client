import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import Update from './components/Update/Update';
import AddCoffee from './components/AddCoffee/AddCoffee';
import Coffees from './components/Coffees/Coffees';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Coffees />,
                loader: () => fetch('http://localhost:5000/coffees'),
            },
            {
                path: '/update',
                element: <Update />,
            },
            {
                path: '/add-coffee',
                element: <AddCoffee />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
