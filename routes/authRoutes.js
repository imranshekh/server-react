/**
 * Created by lcom64_one on 8/3/2017.
 */
//Route handler to get the google api Code
const passport=require('passport');

module.exports=app=>{

app.get(
  '/auth/google',passport.authenticate('google',{
    scope:['profile','email']
  })
);

//Route handler to pass Code to google for configuration

app.get('/auth/google/callback',passport.authenticate('google'));

app.get('/api/logout',(req,res)=>{
  req.logout();
  res.send(req.user);
});

    app.get('/api/current_user',(req,res)=>{
  res.send(req.user);
});

};