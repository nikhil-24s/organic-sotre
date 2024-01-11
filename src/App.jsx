import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Info from './components/Info'
import ItemPage from './components/ItemPage'
import Review from './components/Review'
import Brands from './components/Brands'
import Footer from './components/Footer'

import './styles/App.css'
import'./styles/Header.css'
import "./styles/Hero.css"
import './styles/Info.css'
import './styles/ItemPage.css'
import './styles/Review.css'
import './styles/Brands.css'
import './styles/Footer.css'

const App = () => {

  const [item , setItem] = useState([
    {
      img : "./src/assets/1.jpg",
      category : "Groceries",
      name :"Assorted Coffee",
      price :"$5"
    },
    {
      img : "./src/assets/2.jpg",
      category : "Groceries",
      name :"Hand Sanitizer",
      price :"$15"
    },
    {
      img : "./src/assets/3.jpg",
      category : "Groceries",
      name :"Handpicked Red Chillies",
      price :"$25"
    },
    {
      img : "./src/assets/4.jpg",
      category : "Groceries",
      name :"Natural Extracted Edible Oil",
      price :"$15"
    }
  ])
  return (
    <>
    <Header/>
    <Hero/>
    <Info/>
    <ItemPage item ={item}/>
    <Review/>
    <Brands/>
    <Footer/>
    </>
  )
}

export default App