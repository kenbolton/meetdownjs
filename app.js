
/**
 * Module dependencies.
 */

var express = require('express')
  , mongo = require('mongodb')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hbs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.configure(function() {
  var db = new mongo.Db('test', new mongo.Server('localhost', 27017, {}), {});
  db.open(function() {});
  app.set('db', db);
});

// Routes

app.get('/', routes.index);
app.get('/user', routes.user.index);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
