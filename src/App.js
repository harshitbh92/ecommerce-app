import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import TermsAndConditions from './pages/TermsAndConditions';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Shipping from './pages/Shipping';
import SingleProduct from './pages/SingleProduct';
//whatever we pass in the <Route> will reflect in <Outlet> of Layout.js
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="store" element={<OurStore/>}/>
          <Route path="blogs" element={<Blog/>}/>
          <Route path="blog/:id" element={<SingleBlog/>}/>
          <Route path="compare-product" element={<CompareProduct/>}/>
          <Route path="wishlist" element={<Wishlist/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="forgot-password" element={<ForgotPassword/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="reset-password" element={<ResetPassword/>}/>
          <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="refund-policy" element={<RefundPolicy/>}/>
          <Route path="shipping-policy" element={<ShippingPolicy/>}/>
          <Route path="terms-conditions" element={<TermsAndConditions/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="shipping" element={<Shipping/>}/>
          <Route path="product/:id" element={<SingleProduct/>}/>












        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
