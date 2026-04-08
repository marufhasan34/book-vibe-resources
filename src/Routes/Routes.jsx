import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";
import PageToRead from "../Components/PageToRead/PageToRead";

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
      {
        path:'/bookDetails/:id',
        loader: () =>  fetch('/booksData.json'),
        element: <BookDetails/>
      },
      {
        path: '/page-to-read',
        element: <PageToRead/>
      }
    ],
    errorElement : <ErrorPage/>
  },
]);