import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
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


        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
