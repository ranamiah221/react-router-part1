import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contract from './components/Contract/Contract.jsx';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
      path:'/about',
      element:<About></About>
     },
     {
      path:'/contract',
      element:<Contract></Contract>
     },
     {
      path:'/users',
      loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
     },
     {
      path:'/users/:userId',
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element:<UserDetails></UserDetails>
     },

  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
