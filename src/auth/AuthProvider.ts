
import { ServerResponse } from "../interfaces";
import { verifylogin } from "../services/verifyLogin";

interface AuthProvider {
    isAuthenticated: boolean;
    username: null | string;
    password: null | string;
    signin(username: string, password: string): Promise<boolean>;
    signout(): Promise<void>;
}

export const AuthProvider: AuthProvider = {
    isAuthenticated: (sessionStorage.getItem('isLogged') == 'true') || false,
    username: sessionStorage.getItem('username') || null,
    password: null,
    async signin(username: string, password: string) {
        const loginInfo: ServerResponse = await verifylogin({ username, password });

        if (loginInfo.body) {
            sessionStorage.setItem('isLogged', 'true');
            sessionStorage.setItem('username', username);
            AuthProvider.isAuthenticated = true;
            AuthProvider.username = username;
            return true;
        }

        return false;
    },
    async signout() {
        sessionStorage.setItem('isLogged', 'false');
        sessionStorage.removeItem('username');
        AuthProvider.isAuthenticated = false;
        AuthProvider.username = "";
      },

}