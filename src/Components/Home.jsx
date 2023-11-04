import React from 'react'
import Header from './Header'
import Slider from "./Slider"
import banner2 from "./Banner/banner2.jpg"
import Bannersimg from './Banner/Bannersimg'
import productData from './Data/productdata';
import clothesdata from './Data/clothesdata'
import banner4 from "./Banner/banner4.jpg"
import banner3 from "./Banner/banner3.jpg"
import furnituredata from "./Data/furnituredata"
import Proudctsection from './Proudctsection'
import DealsofHome from './DealsofHome'
import Footer from './Footer'



const Home = () => {
  return (
   <>
    
     <Slider/>
    

     
<DealsofHome data={productData} />
<Bannersimg imgSrc={banner4}/>
<DealsofHome data={clothesdata}/>
<Bannersimg imgSrc={banner3}/>
<DealsofHome data={furnituredata}/>
<Proudctsection/>

   </>
  )
}

export default Home