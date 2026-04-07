import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index : true,
        element: <HomePage/>
      },
      {
        path: '/books',
        element: <Books/>
      },
      
    ],
    errorElement : <ErrorPage/>
  },
]);