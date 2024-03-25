import emailjs from '@emailjs/browser'
import './FormContact.css'
import { useRef } from 'react'

export const FormContact = () => {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) : void => {
        event.preventDefault();

        emailjs.sendForm('service_kaurhwp', 'contact_form', event.currentTarget, {
            publicKey: '6vBOL4XQ5xIp85Xis'
        })
        .then( () => {
            console.log('Correo enviado')
            form.current?.reset();
        }, (error) => {
            console.error("ERROR " + error)
        } );
    }

  return (
    <section className='form-section'>
        <h3>Déjanos tu mensaje</h3>

        <form className='form' ref={ form } onSubmit={ sendEmail }>
            <input type="text" name='user_name' placeholder='Ingrese su nombre*' autoComplete='off' required />
            <input type="email" name='user_email' placeholder='correo@email.com*' autoComplete='off' required />
            <textarea name="message" placeholder='Deja tu mensaje por aquí*' required></textarea>

            <button type="submit">
                <span>Enviar <i className='fa-regular fa-paper-plane'></i> </span>
            </button>
            
        </form>
    </section>
  )
}