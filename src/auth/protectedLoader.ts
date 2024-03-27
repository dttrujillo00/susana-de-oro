import { LoaderFunctionArgs, redirect } from "react-router-dom"
import { AuthProvider } from "./AuthProvider"

export const protectedLoader = ({ request }: LoaderFunctionArgs) => {
    // If the user is not logged in and tries to access '/dashboard' we redirect
    // them to '/login' with a 'from' parameter that allows login to redirect back
    // to this page upon successful authentication

    if (!AuthProvider.isAuthenticated) {
        let params = new URLSearchParams();
        params.set('from', new URL(request.url).pathname);
        return redirect('/login?' + params.toString());
    }

    return null;
}