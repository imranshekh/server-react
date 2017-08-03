/**
 * Created by lcom64_one on 8/2/2017.
 */
const express=require('express');
const passport=require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys=require('./config/keys');
const app=express();

//pa ssport for handling all backend congiguration google oauth api

passport.use(
  new GoogleStrategy(
     {
       clientID: keys.googleClientID,
       clientSecret: keys.googleClientSecret,
       callbackURL: '/auth/google/callback'
     },
    (accessToken,refreshToken,profile,done) => {
       console.log('accesToken:',accessToken );
       console.log('refreshToken:',refreshToken);
       console.log('profile:',profile);
     }
  )
);

//Route handler to get the google api Code

app.get(
  '/auth/google',passport.authenticate('google',{
    scope:['profile','email']
  })
);

//Route handler to pass Code to google for configuration

app.get('/auth/google/callback',passport.authenticate('google'));


const PORT=process.env.port || 5001;
app.listen(PORT);
