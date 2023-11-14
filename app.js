const express=require('express');
const path=require('path');
const app=express();
const publicpath=path.resolve(__dirname,'./public')
app.use(express.static('public'));
const port=process.env.PORT || 3001;
app.listen(port,() => {

    console.log("servidor corriendo en el puerto")
})
app.get('/',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});