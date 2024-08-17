import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import Update from './components/Update/Update';
import AddCoffee from './components/AddCoffee/AddCoffee';
import Coffees from './components/Coffees/Coffees';
import View from './components/View/View';
import AuthProvider from './Providers/AuthProvider';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

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
            {
                path: '/signin',
                element: <SignIn />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>
);
