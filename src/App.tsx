import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"
import { ArticlePage, Dashboard, Home, Layout, LoginPage } from "./pages"
import { AuthProvider, loginAction, loginLoader, protectedLoader } from "./auth";


export const App = () => {

  const router =createBrowserRouter([
    {
      id: 'root',
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
          path: '/login',
          action: loginAction,
          loader: loginLoader,
          element: <LoginPage />
        },
        {
          path: 'dashboard',
          loader: protectedLoader,
          element: <Dashboard />
        },
        {
          path: '*',
          element: <Home />
        }
      ],
    },
    {
      path: '/logout',
      async action() {
        await AuthProvider.signout();
        return redirect('/');
      },
    },
  ]);

  return (
    <RouterProvider router={ router } fallbackElement={ <p>Initial Load...</p> } />
  )
}
