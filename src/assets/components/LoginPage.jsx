import './css/Login.css';
import { useReducer } from "react";
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
export const LoginPage = ({ setIsRegister }) => {
    const [user, setUser] = useState(null);
    const [newSesion, setNewSesion] = useState({
        email: null,
        password: null
    });

    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('backend'));
        if (data) {
          setUser(data);
        }
    }, []);
    
    const getInput = (e) => {
        setNewSesion({ ...newSesion, [e.target.id]: e.target.value });  
    };

    const login = (e) => {
        e.preventDefault();
        if (
            !newSesion.email ||
            !newSesion.password
          ) {
            alert('Todos los campos son obligatorios');
            return;
        }
        
        if (newSesion.email === user.userEmail && newSesion.password === user.userPassword) {
            localStorage.setItem('sesion', JSON.stringify({state: 'active' }));
            setIsRegister(true);
            navigate('/bit02spa/products-cart');
        } else {
            alert('Correo o contraseña incorrectos');
        }

    }

    return (
        <main className="form-main">
            <section className='section-form'>
                <form id="form-login" onSubmit={login}>
                    <label className='l-login'>Correo</label>
                    <input  className='i-login' type="email" id="email" required onInput={getInput}/>
                    <label  className='l-login'>Contraseña</label>
                    <input  className='i-login' type="password" id="password" required onInput={getInput}/>
                    <button type="submit" className="submit">Registrarse</button>
                    <button type="reset" className="reset">Limpiar</button>
                    <div id="show"></div>
                </form>
            </section>
        </main>
    );
}