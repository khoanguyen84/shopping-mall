import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
