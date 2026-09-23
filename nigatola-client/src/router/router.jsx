import { createBrowserRouter } from "react-router";

import Login from "../Page/Login";
import HomeLayout from "../Layout.jsx/HomeLayout";
import StudentPortalLayout from "../Layout.jsx/StudentPortalLayout";
import AuthLayout from "../Layout.jsx/AuthLayout";
import Registration from "../Page/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>
  },
  {
    path:"/studentportal",
    element:<StudentPortalLayout></StudentPortalLayout>,
    children:[
      {
        path:"/studentportal/auth",
        element:<AuthLayout></AuthLayout>,
        children:[
          {
            path:"/studentportal/auth/login",
            element:<Login></Login>
          },
          {
            path:"/studentportal/auth/registration",
            element:<Registration></Registration>
          }
        ]

      }
    ]
  }

  
]);


