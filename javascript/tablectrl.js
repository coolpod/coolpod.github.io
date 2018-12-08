angular.module('dbApp',[])
.controller('TableCtrl',
function($scope,$http){
  var page = 0;
  $scope.getRequest = function(){
    $http.get("https://reqres.in/api/users?page=1")
    .then(function(response){
      $scope.element = response.data.data;
    });
  };

  $scope.search = function(){
    $http.post("/db/api/read",{"first":page*50+1,"last":page*50+50,"id":$scope.id,"trademark":$scope.trademark})
    .then(function(response){
      $scope.element = response.data;
    });
  };

  $scope.add = function(){
    $http.post("/db/api/add",{"trademark":$scope.trademark})
    .then(function(response){
      $scope.addstatus = response.data.status;
    });
  };
});
