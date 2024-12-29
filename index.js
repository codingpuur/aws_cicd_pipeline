import express from 'express'

const app = express();

app.use('/',(req,res)=>{
   res.send('shubham is learning ci/cd this is testing')

})
app.listen(4000,()=>{
    console.log("server is running")
})