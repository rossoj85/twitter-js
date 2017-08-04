// aks about stage 7 and how express static works?
//why is listneing on port 300 not logging on the bottom?

const express = require('express');
const app = express();
const chalk =require('chalk');
const morgan =require('morgan')
const nunjucks = require('nunjucks')
const db = require('./tweetbank.js')
const routes = require('./routes')
// console.log('db', db) 


//NUNCHUCKS CONFIGURATIONS
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }) 



// // var locals = {
// //     title: 'An Example',
// //     people: [
// //         { name: 'Jason'},
// //         { name: 'Sujin' },
// //         { name: 'Hermione'}
// //     ]
// // };
// // nunjucks.configure('views', {noCache: true});
// // nunjucks.render('index.html', locals, function (err, output) {
// //     console.log(output);
// // });


// // app.use(function(req,res,next){
// //     console.log(chalk.blue('Request URL:', req.originalUrl))
// //      //app.use is a middleware that logs somethign everytime we 
// //     next()                                          //do something 
// // })

// // app.use(morgan('dev'))////for some reason this si useless



// app.get('/', function (req, res,next) {
//     const people = [{name: 'Jason'}, {name: 'Sujin'}, {name: 'Bobby'}];
//     res.render( 'index', {title: 'All Users', people: people}, function(err, html){
//         if (err) console.log(err)
//         console.log(html)
//         res.send(html)
//     } );
    
//   next();
// })
// app.get('/Jason',function(req,res, next){
//     req.message = "Welcome to the News Page"
//     res.send('Welcome to the News page')
//     next()
// });
// // app.use(function(req,res,next){
// //     var send_message_body = req.message;
// //     console.log("Sent message body = ",send_message_body)
// // })
app.use(morgan('dev')); ///morgoan comes before and any other app.uses
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.use('/',routes);
app.use(express.static('public'))   ///ask about the order of calling middle ware  and other use statements.
// How is express startic working? --- explains in stage 7