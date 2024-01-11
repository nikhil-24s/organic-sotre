import React from 'react'
import ReviewCard from './ReviewCard'

const Review = () => {
    return (
        <>
            <div className="review">
                <div className="h-review">
                    <p>Customers Reviews</p>
                    <img src="./src/assets/logo-leaf-new.png" alt="" />
                </div>

                <div className="r-cards">
                    <ReviewCard img="./src/assets/client1.png"/>
                    <div className="veg-card">
                        <div className="blck">
                            <p>Deal Of The Day 15% Off On All Vegetables!</p>
                            <p>I am text block. Click edit button to change this tex em ips.</p>
                            <div className="c-btn">
                                shop now <i class="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>

                    <ReviewCard img="./src/assets/client2.png"/>
                </div>
            </div>
        </>
    )
}

export default Review