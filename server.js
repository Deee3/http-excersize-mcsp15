'use strict';

var fs = require('fs');
var path = require('path');
var guestsPath = path.join(__dirname, 'guests.json');

var http = require('http');
var port = process.env.PORT || 8000;

var server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/guests') {
    fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      res.setHeader('Content-Type', 'application/json');
      res.end(guestsJSON);
    });
  }
  else if (req.method === 'GET' && req.url === '/guests/0') {
    fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      var guests = JSON.parse(guestsJSON);
      var guestJSON = JSON.stringify(guests[0]);

      res.setHeader('Content-Type', 'application/json');
      res.end(guestJSON);
    });
  }
  else if (req.method === 'GET' && req.url === '/guests/1') {
    fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
      if (err) {
        console.error(err.stack);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error');
      }

      var guests = JSON.parse(guestsJSON);
      var guestJSON = JSON.stringify(guests[1]);

      res.setHeader('Content-Type', 'application/json');
      res.end(guestJSON);
    });
  }
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

server.listen(port, function() {
  console.log('Listening on port', port);
});