import { SyntheticEvent, useState } from "react"
import { User } from "../interfaces/user"
import { verifylogin } from "../services/verifyLogin"


export const LoginPage = () => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    const onHandleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => { 

        e.preventDefault();

        const formData: User = {
            username,
            password,
        }

        const loginInfo = await verifylogin(formData);

        if (loginInfo.body) {
            console.log('Login OK')
        } else {
            console.log('Login ERROR')
        }
     }

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

            <form className="form" onSubmit={ onHandleSubmit }>
                <input value={ username } onChange={ onUsernameChange } type="text" placeholder="Ingrese su usuario" />
                <input value={ password } onChange={ onPasswordChange } type="password" placeholder="Ingrese su contraseña" />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    </div>
  )
}
