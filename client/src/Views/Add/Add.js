import React, {useState} from 'react'
import axios from 'axios'
import "./Add.css"

function Add() {
    const [id, setId]=useState("")
    const [title, setTitle]=useState("")
    const [category, setCategory]=useState("")
    const [price, setPrice]=useState("")
    
    async function addFoodItem(){
        const responce = await axios.post('/add-item', {
    "id":id,
    "title":title,
    "category":category,
    "price":price
})
if(responce){
    alert("Item added successfully")
    window.location.href="/"
}
    }
  return(
    <div>
         <h1>Add food Item</h1>
         <form>
            <input type="number" placeholder='Enter ID' onChange={(e)=>{setId(e.target.value)}}/><br></br>
            <input type="text" placeholder='Enter Title' onChange={(e)=>{setTitle(e.target.value)}}/><br></br>
            <input type="text" placeholder='Enter Category' onChange={(e)=>{setCategory(e.target.value)}} /><br></br>
            <input type="number" placeholder='Enter Price' onChange={(e)=>{setPrice(e.target.value)}} /><br></br>
            <button type='button' onClick={addFoodItem}>Add Food Item</button>
         </form>
    </div>
  )
}

export default Add
