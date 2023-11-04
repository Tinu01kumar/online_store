import React from 'react'
import Header from './Components/Header'
import   "./App.css";
import Slider from './Components/Slider';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from './Components/Footer';
import Productdetailspage from './Components/Productdetailspage';
import Mobileproducts from './Components/Mobileproducts';
import Allclothes from './Components/Allclothes';
import Allfurtinure from "./Components/Allfurtinure"
const App = () => {
  return (
 <>
<Router>
<Header/>
 <Routes>
  <Route exact path ="/" element={<Home/>}/>
    <Route path="/product/:id" element={<Productdetailspage/>}/>
   <Route exact path="/mobile" element={<Mobileproducts/>}/>
   <Route exact path="/clothes" element={<Allclothes/>}/>
   <Route exact path="/furniture" element={<Allfurtinure/>}/>
 </Routes>
 <Footer/>
</Router>
 </>
  )
}

export default App