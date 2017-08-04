const express = require('express');
const router = express.Router();
//router is not aatually listening to a port
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const path = require('path'); // <--- what is this constant path??


router.use(express.static('public'))


router.get('/',function(req,res){
    let tweets = tweetBank.list();
    console.log("TWEETS",tweets)
    res.render('index',{tweets: tweets}); 
    
});

router.get('/users/:name',function(req,res){
    var name = req.params.name;
    var tweets = tweetBank.find({name: name});
   console.log(tweets)
        // console.log("THIS IS THE REQPARAMS", name);
        // console.log("THIS IS THE OBJ", tweets[0].content);
    res.render('index', {tweets: tweets});
});

router.get('/tweets/:id',function(req,res){
    let id = +req.params.id;
    var tweets = tweetBank.find({id: id});
    console.log("TWEETS", tweets);
    res.render('index',{tweets: tweets})
});
//extra credit add a single tweet route view
// router.get("/stylesheets/style.css",function(req,res){
//     res.sendFile('/Users/Jason /fullstack/immersive/twitter-js/public/stylesheets/style.css')
// });   ///REPLACED WITH EXPRESS STATIC!!! IF WE HAVE SEVERAL FILES IN THE FOLDER, HOW DOES STATIC KNOW WHICH ONE OGES WITH WHICH?
        //BECAUSE THE NAMES ARE MATCHED WITHT HE ADDITION TO THE URL  THE ONLY THING STATUS DOES IS FILL IN THE PATH TO THE GILE 

module.exports = router;

//ask abotu the extra credit to build your onw middelware app for this file 

