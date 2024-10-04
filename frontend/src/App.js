
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopCatogory from './Pages/ShopCatogory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import LoginSign from './Pages/LoginSign';
import Cart from './Pages/Cart';
import Newsletter from './Components/Newsletter/Newsletter';
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCatogory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCatogory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCatogory banner={kid_banner} category="kid"/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSign/>}/>
      </Routes>
      <Newsletter />
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
