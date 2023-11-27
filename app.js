const express = require('express');
const app = express();

const rutaHome=require("./routers/main");

app.use("/", rutaHome);




app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });
