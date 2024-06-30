import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthProvider } from '@descope/react-sdk';
import 'react-bootstrap/dist/react-bootstrap.min.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import DescopeClient from '@descope/node-sdk';

try {
    const descopeClient = DescopeClient({ projectId: 'P2hwIdyL38KIgwdClKN9PiPfzF9g' });
} catch (error) {
    console.log("failed to initialize: " + error)
}

// Fetch session token from HTTP Authorization Header
const sessionToken="xxxx"

try {
    const authInfo = await descopeClient.validateSession(sessionToken);
    console.log("Successfully validated user session:");
    console.log(authInfo);
} catch (error) {
    console.log ("Could not validate user session " + error);
}
// pages
import ErrorPage from "./error-page";
import App from './App.jsx'
import Login from './Users/UsersLogins.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login/>,
        errorElement: <ErrorPage />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider
            projectId='P2hwIdyL38KIgwdClKN9PiPfzF9g'
        >
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);