console.log('friend factory active');
app.factory('friendsFactory', ['$http', function($http){
  var factory = {}
  var friends = [];
  var friend = {};
  factory.index = function(callback){
    //update or set friends variable to send to controllers for displaying
    $http.get('/friends').then(function(returned_data){
      console.log(returned_data.data);
      friends = returned_data.data;
      callback(friends);
    });
  }
  //take the id of a single user and retrieve details of that user from the database and send it back to the showController
  factory.show = function(friendId, callback){
    console.log(friendId)
    $http.get('/friends/show/'+ friendId).then(function(returned_data){
      console.log(returned_data.data);
      //set empty friend object to the json data returned from server then use the friend object in the function passed to this method
      friend = returned_data.data
      callback(friend);
    });
  }
  //send object created from form data to the database to create a new entry, then return an updated list of all friends
  factory.create = function(newfriend, callback){
    console.log(newfriend, 'object passed to factory to create');
    $http.post('/friends', newfriend).then(function(returned_data){
      console.log(returned_data.data);
      //set friend object to returned data
      friend = returned_data.data;
      //push friend object to friends array containing all users
      friends.push(friend);
      //run function passed to this method with friends array as parameter
      callback(friends);
    });
  }
  //takes id of an individual friend and sends http request to server along with form data from edit form to change database entry for individual user
  factory.update = function(editFriend,callback){
    $http.put('/friends/edit/' + editFriend, {first_name: friend.first_name, last_name: friend.last_name, birthday: friend.birthday}).then(function(returned_data){
      console.log(returned_data.data);
      friends = returned_data.data
      callback(friends);
    })
  }
  //sends friend id to server to be deleted from database, server responds with new object containing all friends, minus deleted friend to be ran with the function passed to this method
  factory.delete = function(friendID,callback){
    console.log(friendID,"factory");
    $http.delete('/friends/delete/' + friendID).then(function(returned_data){
      console.log(returned_data.data);
      callback(returned_data.data);
    })
  }
  return factory;
}])
