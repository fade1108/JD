const express = require("express");
var app = express();
app.listen(8080);
const userRouter  = require('./routes/users');
app.use('/user',userRouter);//引用路由