import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Information from './components/information';
import Example from './components/example';

const router = createBrowserRouter([
  {
    path: "/CYK-Algorithm-Simulation",
    element: <App />,
  },
  {
    path: "/information",
    element: <Information />
  },
  {
    path: "/example",
    element: <Example />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
