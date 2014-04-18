
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('short'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//app.get('/', routes.index);
//app.get('/users', user.list);


app.use(
        "/", //the URL throught which you want to access to you static content
        express.static(path.join(__dirname, 'public'))//where your static content is located in your filesystem
    );
app.get('/areaguides',routes.areaguides);
app.get('/attractions',routes.attractions);
app.get('/restaurants',routes.restaurants);
app.get('/nightlife',routes.nightlife);
app.get('/activities',routes.activities);
app.get('/info',routes.info);

app.post('/register',user.register);
//app.use(function(req,res){
//	res.send('<h3>Page not found :</h3> <br> <a href="/">Go to Home Page</a>');
//});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
