import { useState,useEffect } from 'react';
import { store } from './assets/data/store';
import { Nav } from './assets/components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterPage } from './assets/components/RegisterPage';
import { FooterPage } from './assets/components/FooterPage';
import { HomPage } from './assets/components/HomePage';
import { LoginPage } from './assets/components/LoginPage';
import { ProductList } from './assets/components/ProductList';
import{Store} from './assets/components/Store'

function App() {

  const [isRegister, setIsRegister] = useState(false);
  const [isLogued, setIsLogued] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

  useEffect(() => {
    const backend = JSON.parse(localStorage.getItem('backend'));
    const sesion = JSON.parse(localStorage.getItem('sesion'));
    if (backend && sesion) {
      setIsRegister(true);
    } 
  }, []);

  return (
    <BrowserRouter>
      <Nav
        isRegister={isRegister}
        setIsRegister={setIsRegister}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Routes>
        <Route path='/bit02spa' element={<HomPage/>}/>
        <Route path='/bit02spa/store' element={<Store store={store}/>} />
        <Route path='/bit02spa/products-cart' element={
          <ProductList
            store={store}
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />} />
        <Route path='/bit02spa/register' element={<RegisterPage setIsRegister={setIsRegister}/>} />
        <Route path='/bit02spa/login' element={<LoginPage setIsRegister={setIsRegister} />} />
        <Route path='*' element={<></>}/>
      </Routes>
      <FooterPage/>
    </BrowserRouter>
  )
}

export default App
