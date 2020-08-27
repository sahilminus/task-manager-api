const express=require('express');
require('./db/mongoose');
const userRouter=require('./routers/users');
const taskRouter=require('./routers/tasks');

const port=process.env.PORT || 3000
const app=express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port,()=>{
    console.log('Server is set up on '+port);
})