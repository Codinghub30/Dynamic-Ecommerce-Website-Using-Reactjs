import Home from './Home'
import AboutUs from './AboutUs';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './Product';
import Sale from './Component/sale';
import Cart from './cart/Cart1';





function App() {
  return (
    <div>
   <Router>
    
    <Routes>
     
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/sale' element={<Sale/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
   </Router>
   </div>
  );
}

export default App;
