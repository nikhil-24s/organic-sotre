import React from 'react'

const ReviewCard = ({img}) => {
    return (
        <>
            <div className="review-card">
                <div className="y-star">
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                </div>
                <p>
                    Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <div className="client">
                    <img src={img} alt="" />
                    <p>Mila Kunis</p>
                </div>
            </div>
        </>
    )
}

export default ReviewCard