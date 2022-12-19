import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./Show.css"

import FoodItemCard from '../../Components/FoodItemCard/FoodItemCard'

function Show() {

    const [FoodItems, setFoodItems]=useState([])

    async function loadData(){
        //loaddata from API
        const responce = await axios.get('/all-food-items')
        setFoodItems(responce.data.data)
    }

    useEffect(()=>{
        loadData()
    }, [])

  return(
    <div>
       <h1>Show all food items</h1> 
       {
        FoodItems.map((item, index)=>{
            return(
            <FoodItemCard
            id={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
            key={index} />)
        })
       }       
    </div>
  )
}

export default Show
