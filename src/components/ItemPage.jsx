import React from 'react'
import ItemCard from './ItemCard'

const ItemPage = ({item}) => {
  return (
    <>
    <div className="item-page">
        <div className="h-item">
            <p>Best Selling Products</p>
            <img src="./src/assets/logo-leaf-new.png" alt="" />
        </div>
        <div className="item-card">
            <ItemCard item={item}/>
        </div>
    </div>
    </>
  )
}

export default ItemPage