import express from 'express'

const app = express();

app.use('/',(req,res)=>{
   res.send('shishank is testing ci/cd')

})
app.listen(4000,()=>{
    console.log("server is running")
})