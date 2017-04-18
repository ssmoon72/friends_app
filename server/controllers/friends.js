//actual database manipulation occurs here. instantiate mongoose variable and friends collection in mongodb
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
console.log('friends server controller');
//export this file so others may call upon these functions
module.exports = {
  //retrieves all friends from database and returns as json object
  index: function(req,res){
    Friend.find({}, function(err,friends){
      if (err){
        console.log('error finding friends');
      }
      else{
        res.json(friends);
      }
    })
  },
  //receive http request from friendsFactory and create a new entry in database with information retrieved from the request body, returns json object
  create: function(req,res){
    console.log(req.body);
    Friend.create(req.body, function(err, result){
      if (err){
        console.log('error creating new friend');
      }
      else {
        console.log('added new friend')
        res.json(result);
      }
    })
  },
  //updates the friend with the matching id found in req.params.id with the information in req.body
  update: function(req,res){
    console.log(req.body.first_name,'friend update')
    Friend.update({_id: req.params.id}, {$set: {first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday }}, function(err, friend){
      if (err){
        console.log('error updating friend');
      }
      else {
        res.json(friend);
      }
    })

  },
  //deletes the friend with matching id from req.params.id from the database and returns an amended list of all friends via json object
  delete: function(req,res){
    console.log(req.params.id, 'server controller delete')
    Friend.remove({_id: req.params.id}, function(err,friends){
      if (err){
        console.log('error removing friend')
      }
      else{
        res.json(friends);
      }
    })
  },
  //finds the friend with id matching req.params.id and returns info via json object
  show: function(req,res){
    console.log(req.params.id)
    Friend.findOne({_id: req.params.id}, function(err, friends){
      console.log(friends);
      res.json(friends);
    })
  }
}
