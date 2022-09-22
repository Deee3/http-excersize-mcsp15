// routes.js

routes = {
    '/special-message': function(req, res) {
      res.end("You're SPECIAL");
    },
  
    '/non-special-message': function(req, res) {
      res.end("You're boring!");
    }
  };
  
  module.exports = routes;
  
  // index.js
  var http   = require('http');
  var routes = require('./routes');
  
  var handleRequest = function (req, res) {
    if(routes[req.url] !== undefined) {
      routes[req.url](req, res);
    } else {
      res.end("404, no such route");
    }
  };
  
  var server = http.createServer(handleRequest);
  
  server.listen(8000, function() {
    console.log("Listening...");
  });
  