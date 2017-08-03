/**
 * Created by lcom64_one on 8/2/2017.
 */
const express=require('express');
const authRoutes=require('./routes/authRoutes');
const mongoose=require('mongoose');
const keys=require('./config/keys');
const cookeySession=require('cookie-session');
const passport=require('passport');
//we have to call passport atleast one time anywhere in the project
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongooseURL);

const app=express();

app.use(cookeySession({
  maxAge:30*24*60*60*1000,
  keys:[keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);

//or
//require('./routes/authRoutes')(app)

const PORT=process.env.port || 5001;
app.listen(PORT);
