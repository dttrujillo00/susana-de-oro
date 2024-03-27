import { redirect } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";

export const loginLoader = async () => {
    if (AuthProvider.isAuthenticated) {
        return redirect('/');
    }

    return null;
}