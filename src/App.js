import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Herosection from './components/Herosection';
import  Footer  from './components/Footer';
import {Route, Routes } from 'react-router-dom';
import Allproducts  from './components/Allproducts';
import Contact from './components/Contact';
function App() {
  return (
    <div >
      <Header/>
      <Herosection/>
      <Allproducts/>
      <Contact/>
      <Routes>
    
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
