import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ArticlePage, Dashboard, Home, Layout, LoginPage } from "./pages"
import { AuthProvider } from "./auth/AuthProvider"


export const App = () => {

  const router =createBrowserRouter([
    {
      path: '/',
      loader() {
        return { user: AuthProvider.username }
      },
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
