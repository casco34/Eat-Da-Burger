var express = require('express');
var bodyParser =require('body-parser');
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// setting handlebars

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// importing routes
var routes = require('./controllers/burgers_controller.js');

app.use(routes);

//STARTING SERVER
app.listen(PORT, function(){

    console.log('Server is listening on:http://localhost:' + PORT);

});