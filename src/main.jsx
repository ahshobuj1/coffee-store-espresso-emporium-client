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
import ViewUsers from './components/AllUsers/ViewUsers';
import ProtectedRoute from './ProtectedRoutes/ProtectedRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Coffees />,
            },
            {
                path: '/update/:id',
                element: <Update />,
                loader: ({params}) =>
                    fetch(
                        `https://coffee-store-espresso-emporium-server-one.vercel.app/coffees/${params.id}`
                    ),
            },
            {
                path: '/add-coffee',
                element: <AddCoffee />,
            },
            {
                path: '/view/:id',
                element: <View />,
                loader: ({params}) =>
                    fetch(
                        `https://coffee-store-espresso-emporium-server-one.vercel.app/coffees/${params.id}`
                    ),
            },
            {
                path: '/signin',
                element: <SignIn />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/view-users',
                element: (
                    <ProtectedRoute>
                        <ViewUsers />
                    </ProtectedRoute>
                ),
                loader: () =>
                    fetch(
                        'https://coffee-store-espresso-emporium-server-one.vercel.app/users'
                    ),
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
