import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
 
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Singup from './Authentication/Singup';
import Login from './Authentication/Login';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home />
    },
    {
      path:"/signup",
      element:<Singup />
    },
    {
      path:"/login",
      element:<Login />
    }
  ])
  return (
    <div className="App">
   <RouterProvider router={router} />

    </div>
  );
}

export default App;
