import { Link } from 'react-router-dom';
import './css/Nav.css';

 export const Nav = () => {
    
    return (
        <nav>
            <ul className='menu'>
                <li className='menu-item'><Link to='/bit02spa'>Inicio</Link></li>
                <li className='menu-item'><Link to='/bit02spa/products'>Productos</Link></li>
                <li className='menu-item'><Link to='/bit02spa/register'>Registro</Link></li>
            </ul>
        </nav>
    );
}