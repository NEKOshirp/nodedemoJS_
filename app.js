const express = require('express')
const app = express()

app.set('view engine','hbs')
var dssv = [
    {id:1, name:"long", age : 20, phone: "013248789"},
    {id:2, name:"truong", age : 23, phone: "013248789"},
]
app.get('/', (req, res)=>{
    res.render('home', {danhsach : dssv })
})
app.get('/student/:id', (req, res)=>{
    let studentid = parseInt(req.params.id)
    let student = dssv.find(item => item.id === studentid)
    console.log(student)
   // res.sendFile(__dirname + "/" + studentname + ".html")
   if (student){
    res.render('student', {'student': student}) 
   }else{
    res.send('Not found!')
   } 
     
})
app.get('/delete/:id', (req, res)=>{
    let studentid = parseInt(req.params.id)
    let student = dssv.findIndex(item => item.id === studentid)
    console.log(index)
    if (index !==-1){
        dssv = dssv.splice(index,1)
    
    }
    res.redirect('/')
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("Server is running on Port " + PORT)
})