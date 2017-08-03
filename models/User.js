/**
 * Created by lcom64_one on 8/3/2017.
 */
const mongoose=require('mongoose');
const Schema=mongoose.Schema; //or {Schema}=mongoose

const userSchema=new Schema({

  googleID:String
});

mongoose.model('users',userSchema);