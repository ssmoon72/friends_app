app.controller('editController', ['$scope','$routeParams', '$location',  'friendsFactory', function($scope, $routeParams, $location, friendsFactory){
  console.log('editController')
  console.log($routeParams._id);
  //finds a single user based on friend id, adds to $scope.friend so that the existing info can displayed in the form fields
  var findFriend = function(){
    friendsFactory.show($routeParams._id, function(data){
      console.log(data);
      $scope.friend = data;
      $scope.friend.birthday = new Date($scope.friend.birthday)
    })
  }
  //invokes findFriend function to find a single user
  findFriend();
  //sends id of a user to the friends factory to edit then redirects to all users list
  $scope.update = function(){
    friendsFactory.update($routeParams._id, function(returnedData){
      $location.url('/');
    })
  }
}]);
