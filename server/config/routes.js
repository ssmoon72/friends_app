//import path to allow joining of file paths
var path = require('path');
//import server controller methods from friends.js
var friends = require('../controllers/friends.js');
console.log('routes');
//export routes so others can use these methods
module.exports = function(app) {
  app.get('/', function(req, res) {
    //process.env['APPROOT'] is simply the path of the root directory as defined in server.js, This line sends the main index.html file
    res.sendFile(path.join(process.env['APPROOT'],'client/index.html'))
  })
  //sends to http request to .index method in server conroller
  app.get('/friends', function(req, res) {
    friends.index(req, res);
  });
  //sends to http request to .show method in server conroller
  app.get('/friends/show/:id', function(req, res) {
    friends.show(req, res);
  });
  //sends to http request to .create method in server conroller
  app.post('/friends', function(req, res) {
    friends.create(req, res);
  });
  //sends to http request to .update method in server conroller
  app.put('/friends/edit/:id', function(req, res) {
    friends.update(req, res);
  });
  //sends to http request to .delete method in server conroller
  app.delete('/friends/delete/:id', function(req, res) {
    friends.delete(req, res);
  });
}
