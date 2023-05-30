import { Nav } from './assets/components/Nav';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import products  from './assets/data/products';
import { ProductsPage } from './assets/components/ProductsPage';
import { RegisterPage } from './assets/components/RegisterPage';
import { FooterPage } from './assets/components/FooterPage';
import { HomPage } from './assets/components/HomePage';

function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/bit02spa' element={HomPage}/>
        <Route path='/bit02spa/products' element={<ProductsPage products={products} />}></Route>
        <Route path='/bit02spa/register' element={<RegisterPage/>}></Route>
      </Routes>
      <FooterPage/>
    </BrowserRouter>
  )
}

export default App
