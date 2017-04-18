app.controller('showController', ['$scope', '$routeParams', 'friendsFactory', function($scope, $routeParams, friendsFactory){
  console.log('showController');
  console.log($routeParams._id);
  //finds a single friend by passing the id through the url to the factory, returns the object and adds to $scope.friend
  var findFriend = function(){
    friendsFactory.show($routeParams._id, function(data){
      console.log(data);
      $scope.friend = data;
    })
  }
  //invokes findFriend method to find a single user and display details
  findFriend();

}])
