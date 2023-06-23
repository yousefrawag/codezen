import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Servies from './components/pages/servies/Servies';
import OurWork from './components/pages/ourWork/Our-Work';
import Contact from './components/pages/contact/Contact';
import './App.scss';
import SingleProduct from "./components/pages/singleProduct/SingleProduct";

const App = () => {

  const handleCopy = (event) => {
    event.preventDefault()
    alert('Copying content from this site is not allowed.')
  }

  useEffect(() => {
    window.addEventListener('copy' ,handleCopy)
    return () =>{
      window.removeEventListener('copy', handleCopy)
    }
  
  },[])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="servies" element={<Servies />} />
            <Route path="our-work" element={<OurWork />} />
            <Route path="contact" element={<Contact />} />
            <Route path="SingleProduct/:id" element={<SingleProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
