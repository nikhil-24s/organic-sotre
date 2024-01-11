import React from 'react'
import '../styles/ItemCard.css'

const ItemCard = ({ item }) => {
    return (
        <>
            {
                item.map((item, i) => {
                    return <>
                        <div className="items" key={i}>
                            <img src={item.img} alt="" />
                            <p className='category'>{item.category}</p>
                            <p>{item.name}</p>
                            <div className="5-star">
                                <i className="ri-star-line"></i>
                                <i className="ri-star-line"></i>
                                <i className="ri-star-line"></i>
                                <i className="ri-star-line"></i>
                                <i className="ri-star-line"></i>
                            </div>
                            <p>{item.price}</p>
                        </div>
                    </>
                })
            }
        </>
    )
}

export default ItemCard