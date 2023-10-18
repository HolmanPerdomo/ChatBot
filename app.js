const express = require('express')
const app = express()

const http = require('http')
const serve = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(serve)

io.on('connection', (socket) => {
    /*
    socket.on('chat message', (data) => {
        const userId = data.userId; // ID del usuario destinatario
        const message = data.message;
        // Envía el mensaje al usuario destinatario basado en userId
        io.to(userId).emit('chat message', message);
      });
      /*
    /*ok anterior */

       socket.on('chat', (msg)=>
   {
    io.emit('chat',msg)
   })

   /*ok anterior*/
})

app.get('/',(req,res) =>
{
    res.sendFile(`${__dirname}/Cliente/index.html`)
})
serve.listen(3000, ()=>
{
    console.log('servidor corriendo en el puerto 3000')
})