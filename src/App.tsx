import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ArticlePage, Home, Layout } from "./pages"


export const App = () => {

  const router =createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'article/:id',
          element: <ArticlePage />
        },
        {
          path: '*',
          element: <Home />
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={ router } />
  )
}
