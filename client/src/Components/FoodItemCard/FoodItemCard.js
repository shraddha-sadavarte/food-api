import React from 'react'
import "./FoodItemCard.css"

function FoodItemCard({id,title,category,price}){
    return(
        <div className='food-item-card'>
           <h6>Id: {id}</h6>
           <h6>Title: {title}</h6>
           <h6>Category: {category}</h6>
           <h6>price: {price}</h6>
        </div>
    )
}

export default FoodItemCard