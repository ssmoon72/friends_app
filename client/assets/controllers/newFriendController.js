//initializing the controller that takes care of new friend creation
app.controller('newFriendController', ['$scope', '$routeParams', 'friendsFactory', function($scope, $routeParams, friendsFactory){
  console.log('newFriendController')
  //method that grabs all friends from the factory
  var index = function(){
    //sends a callback to friendsFactory.index that puts all friends in $scope.friends
    friendsFactory.index(function(data){
      console.log(data);
      $scope.friends = data;
    })
  }
  //invoking index function to populate $scope.friends and display friends
  index();
  console.log('index funciton invocation newFriendController')
  //sends form data contained in $scope.friend to friendsFactory
  //returns and adds created friend to $scope.friends
  $scope.create = function(){
    console.log($scope.friend, 'Submitted Form');
    friendsFactory.create($scope.friend, function(data){
      $scope.friends = data;
    });
  }
  //sends a specific user id to the factory, returns and invokes index method to update $scope.friends to display all friends, minus deleted friend
  $scope.delete = function(id){
    console.log(id, 'delete')
    friendsFactory.delete(id, function(data){
      index();
    })
  }

}]);
