import './css/RegisterPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const RegisterPage = ({setIsRegister}) => {

    const [newUser, setNewUser] = useState({
        userName: null,
        userEmail: null,
        userCard: null,
        userPassword: null
    });
    const navigate = useNavigate();

    const getInput = (e) => {
        setNewUser({
            ...newUser, [e.target.id]: e.target.value,
        });
        console.log(newUser);
    }

    const userRegister = (e) => {
        e.preventDefault();
        if (
            !newUser.userName ||
            !newUser.userEmail ||
            !newUser.userCard ||
            !newUser.userPassword
          ) {
            alert('Todos los campos son obligatorios');
            return;
          }
        localStorage.setItem('backend', JSON.stringify(newUser));
        localStorage.setItem('sesion', JSON.stringify({ state:'active'}));
        setIsRegister(true);
        navigate('/bit02spa/products-cart');
    }

    return (
        <main className="form-main">
            <section className='section-form'>
            <form id="form-registro" onSubmit={userRegister}>
            <label className='l-register' >Nombre Completo</label>
                    <input className='i-register' type="text" id="userName" required onInput={getInput}/>
                    <label className='l-register'>Correo</label>
                    <input className='i-register' type="email" id="userEmail" required onInput={getInput}/>
                    <label className='l-register' >Tarjeta </label>
                    <input className='i-register' type="text" id="userCard" required onInput={getInput}/>
                    <label className='l-register' >Contraseña</label>
                    <input className='i-register' type="password" id="userPassword" required onInput={getInput}/>
                    <button type="submit" className="submit">Registrarse</button>
                    <button type="reset" className="reset">Limpiar</button>
                    <div id="show"></div>
            </form>
            </section>
        </main>
  );
};