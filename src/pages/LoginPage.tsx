import { Form, useActionData, useLocation, useNavigation } from "react-router-dom"
import { ErrorNotification } from "../components";


export const LoginPage = () => {

    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let from = params.get('from') || '/';

    let navigation = useNavigation();
    let isLogginIn = navigation.formData?.get('username') != null;

    let acionData = useActionData() as { error: string } | undefined;


  return (
    <div className="login-page">

        <div className="login-container">
            <h1>Login</h1>

            <Form className="form" method="post" replace>
                <input type="hidden" name="redirectTo" value={ from } />
                <input name="username" type="text" placeholder="Ingrese su usuario" />
                <input name="password" type="password" placeholder="Ingrese su contraseña" />
                <button type="submit" disabled={ isLogginIn } >
                    { isLogginIn ? 'Iniciando Sesión...' : 'Iniciar Sesión' }
                </button>
                { acionData && acionData.error ? (
                    <ErrorNotification errorMessage={ acionData.error } />
                ) : null }
            </Form>
        </div>
    </div>
  )
}
