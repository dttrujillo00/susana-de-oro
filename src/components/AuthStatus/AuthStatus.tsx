import { useFetcher, useRouteLoaderData } from "react-router-dom"
import './AuthStatus.css'

export const AuthStatus = () => {

    let { user } = useRouteLoaderData('root') as { user: string | null };
    let fetcher = useFetcher();

    if (!user) {
        return <p>No has iniciado sesión.</p>;
    }

    let isLogginOut = fetcher.formData != null;

  return (
    <div className="auth-status">
        <p>Bienvenida { user } </p>
        <fetcher.Form method="post" action="/logout">
            <button type="submit" disabled={ isLogginOut } >
                { isLogginOut ? 'Cerrando sesión...' : 'Cerrar sesión' }
            </button>
        </fetcher.Form>
    </div>
  );
}
