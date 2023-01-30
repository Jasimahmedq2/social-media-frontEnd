import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,

} from "react-router-dom";
import Home from './Pages/Home/Home';
import Singup from './Authentication/Singup';
import Login from './Authentication/Login';
import Profile from './Components/Profile';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/signup",
      element: <Singup />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/profile/:id",
      loader: async ({ params }) => {
        return await fetch(`https://own-social.onrender.com/api/user/${params.id}`)
      },
      element: <Profile />
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
