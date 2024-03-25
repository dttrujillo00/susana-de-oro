import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ArticlePage, Dashboard, Home, Layout, LoginPage } from "./pages"


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
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: '/login',
          element: <LoginPage />
        },
        {
          path: '*',
          element: <Home />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={ router } />
  )
}
