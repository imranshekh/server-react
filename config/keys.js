/**
 * Created by lcom64_one on 8/2/2017.
 */
if(process.env.NODE_ENV==='production'){
    module.exports=require('./prod');

}else{
    module.exports=require('./dev');
}
