import './css/Nav.css';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const Nav = (
    {
        isRegister,
        setIsRegister,
        allProducts,
        setAllProducts,
        total,
        countProducts,
        setCountProducts,
        setTotal,
    }) => {
     const [active, setActive] = useState(false);
     let isSesion = null;
     const navigate = useNavigate();

     const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.units);
		setCountProducts(countProducts - product.units);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
    };
    
    const onPayment = () => {
		alert(`Gracias Por la compra!!!
		 Total: ${total}`);
        onCleanCart();
    }

    const closeSesion = () => {
        localStorage.removeItem('sesion');
        setIsRegister(false);
        navigate('/bit02spa/login');
    };

    if (isRegister) {
        isSesion = (<>
            <li className='menu-item'>
                <Link to='/bit02spa/products-cart'>Mi carrito</Link>
            </li>
            <li className='menu-item' id='li-icon'>
             <div className='container-icon'>
				<div className='container-cart-icon'onClick={() => setActive(!active)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='count-products'>
						<span id='contador-productos'>{countProducts}</span>
					</div>
				</div>

				<div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
					{allProducts.length ? (
						<>
							<div className='row-product'>
								{allProducts.map(product => (
									<div className='cart-product' key={product.id}>
										<div className='info-cart-product'>
											<span className='cantidad-producto-carrito'>
												{product.units}
											</span>
											<p className='titulo-producto-carrito'>
												{product.title}
											</p>
											<span className='precio-producto-carrito'>
												${product.price}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>

                            <div className='btn-cart'>
                                <button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
                                 </button>
                                <button className='btn-payment' onClick={onPayment}>
								Pagar
							    </button>
                            </div>
						</>
					) : (
						<p className='cart-empty'>El carrito está vacío</p>
					)}
				</div>
			</div>
             </li>
            <li className='menu-item'><button className='btn-nav' onClick={closeSesion}>Cerrar sesion</button></li>
         </>);
     }else{
         isSesion = (<>
            <li className='menu-item'><Link to='/bit02spa/store'>Tienda</Link></li>
            <li className='menu-item'>
                 <Link to='/bit02spa/login'>Iniciar sesión</Link>
             </li>
             <li className='menu-item'>
                <Link to='/bit02spa/register'>Registrarse</Link>
            </li>
         </>)
     }

    return (
        <nav>
            <ul className='menu'>
                <li className='menu-item'><Link to='/bit02spa'>Inicio</Link></li>
            </ul>
            <ul className='menu'>
                {isSesion}
            </ul>
        </nav>
    );
}