/**
 * Created by lcom64_one on 8/2/2017.
 */
const express=require('express');

const app=express();

//Route handler for getting the data

app.get('/',(req,res)=>{

  res.send({hi:'imran'});

});

app.listen(5001);
