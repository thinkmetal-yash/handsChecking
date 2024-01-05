var express=require('express')
const app=express()
app.listen(5000,()=>{
    console.log('Server running on port 5000')
})

app.get('/',(req,res)=>{
    res.send('<h1>Hi peeks!</h1>')
})