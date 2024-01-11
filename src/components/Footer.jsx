import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="footer">
            <img src="./src/assets/logo.svg" alt="" />
            <p>Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.</p>
            <div className="hr"></div>
            <div className="social-media">
                <p>Copyright © 2023 | Organic Store</p>
                <div className="icons">
                <i class="ri-facebook-fill"></i>
                <i class="ri-linkedin-fill"></i>
                <i class="ri-github-fill"></i>
                <i class="ri-instagram-fill"></i>
                </div>
            </div>
    </div>
    </>
  )
}

export default Footer