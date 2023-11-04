import React from 'react'
import styled from 'styled-components'
import logo from "./Images/logo2.webp"
const Mainsection=styled.div`
padding:1rem;
display:flex;
background-color:white;

margin-top:2rem ;
justify-content:space-around;
div , h1 , p{

    background-color:white;

}
h1 ,p{
    &:hover{
        color:red;
    }
}
div{
    text-align:center;

}

`
const Lastfooter=styled.div`

text-align:center;
background-color:white;
p{
    background-color:white;
    color:black;

    padding-bottom:2rem;
}
 img{
    width:auto;
    height:100px;

 }
`
const Footer = () => {
  return (
    <>
    

     <Mainsection>
         <div>
         <h1>About us</h1>
           <p>growth</p>
           <p>we care you</p>
           <p>gift</p>
           <p>sale</p>
         </div>
         <div>
         <h1>help</h1>
         <p>payments</p>
         <p>shipping</p>
         <p>cancellation</p>
         <p>FAQ</p>
         <p>report</p>
         </div>

         <div>
         <h1>social profiles</h1>
         <p>facebook</p>
         <p>twitter</p>
         <p>youtube</p>
         <p>linkedin</p>
         <p>instagram</p>
         </div>

    </Mainsection>
    <Lastfooter>
       <img src={logo}></img>
       <p>©2023,Tinu kumar</p>
    </Lastfooter>
    </>
  )
}

export default Footer