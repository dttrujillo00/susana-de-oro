import { LoaderFunctionArgs, redirect } from "react-router-dom"
import { AuthProvider } from "./AuthProvider";

export const loginAction = async ({ request }: LoaderFunctionArgs) => {
    let formData = await request.formData();
    let username = formData.get('username') as string | null;
    let password = formData.get('password') as string | null;
    // let password = formData.get('password') as string | null;

    // Validate our form inputs and return validation error via useActionData()
    if (!username) {
        return {
            error: "Debes proveer un usuario para iniciar sesión",
        };
    }

    if (!password) {
        return {
            error: "Debes proveer una contraseña para iniciar sesión",
        };
    }

    // Sign in and redirect to the proper destination if successful
    try {
        const isSigned = await AuthProvider.signin(username, password)
        if (!isSigned) {
            return {
                error: 'Credenciales incorrectas!'
            }
        }
    } catch (error) {
        return {
            error: 'Inicio de sesión inválido'
        }
    }

    let redirectTo = formData.get('redirectTo') as string | null;
    return redirect(redirectTo || '/');
}