import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import Update from './components/Update/Update';
import AddCoffee from './components/AddCoffee/AddCoffee';
import Coffees from './components/Coffees/Coffees';
import View from './components/View/View';

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
                path: '/update/:id',
                element: <Update />,
                loader: ({params}) =>
                    fetch(`http://localhost:5000/coffees/${params.id}`),
            },
            {
                path: '/add-coffee',
                element: <AddCoffee />,
            },
            {
                path: '/view/:id',
                element: <View />,
                loader: ({params}) =>
                    fetch(`http://localhost:5000/coffees/${params.id}`),
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
