import { ServerResponse } from "../interfaces";
import { verifylogin } from "../services/verifyLogin";

interface AuthProvider {
    isAuthenticated: boolean;
    username: null | string;
    password: null | string;
    signin(username: string, password: string): Promise<void>;
    signout(): Promise<void>;
}

export const AuthProvider: AuthProvider = {
    isAuthenticated: false,
    username: null,
    password: null,
    async signin(username: string, password: string) {
        const loginInfo: ServerResponse = await verifylogin({ username, password });

        if (loginInfo.body) {
            AuthProvider.isAuthenticated = true;
            AuthProvider.username = username;
        }
    },
    async signout() {
        await new Promise((r) => setTimeout(r, 500)); // fake delay
        AuthProvider.isAuthenticated = false;
        AuthProvider.username = "";
      },

}