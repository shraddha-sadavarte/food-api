import express from 'express';

const app=express();
app.use(express.json());

const db=[{
    id:1,
    title:'Idli',
    price:40,
    category:'breakfast'
},
{
    id:2,
    title:'pizza',
    price:150,
    category:'fast-food'
},
{
    id:3,
    title:'cold coffee',
    price:100,
    category:'drink'
}]

//get all items
app.get('/all-food-items',(req,res)=>{
    res.json({
       status:true,
       data:db,
       message:'All food items read successfully'
    })
})

//add new item
app.post('/add-item',(req,res)=>{
    const { id,title,price,category }=req.body;

    const newItem={
        id:id,
        title:title,
        price:price,
        category:category
    }

    //check if food item is already exists or not
    db.forEach((item)=>{
        if(item.id===id){
            return res.json({
                status:false,
                data:null,
                message:'food item already in list'
            })
        }
    })

    db.push(newItem);

    res.json({
        status:true,
        data:newItem,
        message:'New food item added successfully'
    })
})

//get food item by id
app.get('/food-item-by-id',(req,res)=>{
    //read id from query params
    const id =req.query.id

    db.forEach((item)=>{
        if(item.id==id){
            return res.json({
                success:true,
                data:item,
                message:'food item featch successfully'
        })
        }
    })

    res.json({
        success:false,
        data:null,
        message:'food item not found'
    })
})

//delete food item
app.get('/delete-food-item-by-id',(req,res)=>{
    const id=req.query.id

    db.forEach((item,index)=>{
        if(item.id==id){
            db.splice(index,1)
            return res.json({
                success:true,
                data:db,
                message:'food item delete successfully'
            })
        }
    })

    res.json({
        success:false,
        data:null,
        message:'food item not found'
    })
    
})

//get food items by category
app.get('/food-item-by-category',(req,res)=>{
    const category=req.query.category

    const temp=[]

    db.forEach((item)=>{
        if(item. category===category){
            temp.push(item)
        }
    })

    res.json({
        success:true,
        data:temp,
        message:`food items for ${category} fetched successfully`
    })
})



app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})