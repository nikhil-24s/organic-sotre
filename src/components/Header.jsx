import React from 'react'

const Header = () => {
  return (
    <>
    <nav>
        <div className="nav-left">
            <img src="./src/assets/logo.svg" alt="" />
            <p>everything</p>
            <p>groceries</p>
            <p>juice</p>
        </div>
        <div className="nav-right">
            <p>about</p>
            <p>contact</p>
            <i className="ri-user-3-line"></i>
        </div>
    </nav>
    </>
  )
}

export default Header