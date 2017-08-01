const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const path = require('path');


router.use(express.static('public'))


router.get('/',function(req,res){
    let tweets = tweetBank.list();
    res.render('index',{tweets: tweets}); 
});

// router.get("/stylesheets/style.css",function(req,res){
//     res.sendFile('/Users/Jason /fullstack/immersive/twitter-js/public/stylesheets/style.css')
// });   ///REPLACED WITH EXPRESS STATIC!!! IF WE HAVE SEVERAL FILES IN THE FOLDER, HOW DOES STATIC KNOW WHICH ONE OGES WITH WHICH?
        //BECAUSE THE NAMES ARE MATCHED WITHT HE ADDITION TO THE URL  THE ONLY THING STATUS DOES IS FILL IN THE PATH TO THE GILE 

module.exports = router;

//ask abotu the extra credit to build your onw middelware app for this file 