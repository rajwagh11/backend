const express=require('express');
const {Server}=require('socket.io');
const http=require('http')
const app=express();
const server=http.createServer(app);
const io=new Server(server);

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
    });

io.on("connection",(socket)=>{
    console.log("welcome", socket.id);
    socket.on("send_message", (message)=>{
        console.log("message recieved", message);
        // socket.broadcast.emit("recieve_message",message);
       io.emit("recieve_message",message);
    })
})


server.listen(3000,()=>{
    console.log("Server Running on port 3000");
})