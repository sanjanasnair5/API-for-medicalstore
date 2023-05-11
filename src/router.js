import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Listmedicine  from "./components/medical/listmedicine";
import Addmedicine from "./components/medical/addmedicine";
import Viewmedicine from "./components/medical/viewmedicine";
import Editmedicine from "./components/medical/editmedicine";
import Listsearch  from "./components/medical/search";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'medical/medicine', element: <Listmedicine/>},
    { path: 'medical/medicine/search', element: <Listsearch/>},
    { path: 'medical/medicine/add', element: <Addmedicine/>},
    { path: 'medical/medicine/:postId', element: <Viewmedicine/>},
    { path: 'medical/medicine/:postId/edit', element: <Editmedicine/>},
    { path: 'register', element:<Register/>},
    { path: 'login', element:<Login/>}
  
   
]);

export default router;