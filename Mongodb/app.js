const express= require('express');
const app = express();
const userModel=require(`./usermodel`);

app.get('/', (req,res)=>{
    res.send("hey");
})

app.get('/create',async (req,res)=>{

    let usercreated =await userModel.create({
        name:"Raj",
        username:"Raj",
        email:"raj@gmail.com"
    })
    res.send(usercreated);
})
app.get('/update',async (req,res)=>{

    let userupdated =await userModel.findOneAndUpdate({username:"Raj"},{name:"Raj Nitin Wagh"}, {new:true})
    res.send(userupdated);
})
app.get('/read',async (req,res)=>{

    let read =await userModel.find()
    res.send(read);
})

app.get('/delete',async (req,res)=>{

    let delete1 =await userModel.findOneAndDelete({username:"Raj"})
    res.send(delete1);
})

app.listen(3000);