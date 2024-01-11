import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="hero-left">
            <img src="./src/assets/organic-products-hero.png" alt="" />
        </div>
        <div className="hero-right">
            <img src="./src/assets/logo-leaf-new.png" alt="" />
            <h3>Best Quality Products</h3>
            <h1>Join The Organic Movement!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="shop-btn">
            <i className="ri-shopping-cart-2-line"></i>
            <span>shop</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero