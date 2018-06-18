//Require key libs
const express = require('express'); //Require express module
const config = require('./config'); //Require all config details from this file
const bot = require('./bot'); //Require bot module

let app = express(); //This creates a express app

//Listen to port defined in config file
app.listen(config('PORT'),()=>{

    console.log(`Bot started on ${config('PORT')}`);
});




