import { SyntheticEvent, useState } from "react"
// import { User } from "../interfaces/user"
// import { verifylogin } from "../services/verifyLogin"
import { Form, useActionData, useLocation, useNavigation } from "react-router-dom"


export const LoginPage = () => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    // const onHandleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => { 

    //     e.preventDefault();

    //     const formData: User = {
    //         username,
    //         password,
    //     }

    //     const loginInfo = await verifylogin(formData);

    //     if (loginInfo.body) {
    //         console.log('Login OK')
    //     } else {
    //         console.log('Login ERROR')
    //     }
    //  }

    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let from = params.get('from') || '/';

    let navigation = useNavigation();
    let isLogginIn = navigation.formData?.get('username') != null;

    let acionData = useActionData() as { error: string } | undefined;

     const onUsernameChange = (e: SyntheticEvent<HTMLInputElement>) => { 
        setUsername(e.currentTarget.value)
      }

     const onPasswordChange = (e: SyntheticEvent<HTMLInputElement>) => { 
        setPassword(e.currentTarget.value)
      }


  return (
    <div className="login-page">

        <div className="login-container">
            <h1>Login</h1>

            <Form className="form" method="post" replace>
                <input type="hidden" name="redirectTo" value={ from } />
                <input name="username" value={ username } onChange={ onUsernameChange } type="text" placeholder="Ingrese su usuario" />
                <input name="password" value={ password } onChange={ onPasswordChange } type="password" placeholder="Ingrese su contraseña" />
                <button type="submit" disabled={ isLogginIn } >
                    { isLogginIn ? 'Iniciando Sesión...' : 'Iniciar Sesión' }
                </button>
                { acionData && acionData.error ? (
                    <p style={{ color: 'red' }} >{ acionData.error }</p>
                ) : null }
            </Form>
        </div>
    </div>
  )
}
