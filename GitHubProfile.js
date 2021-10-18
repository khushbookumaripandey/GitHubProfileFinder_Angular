var app=angular.module('myModule',[])
app.controller('myController', function($scope,$http){
             $scope.searchProfile= function(){
                      $http.get('https://api.github.com/users/'+$scope.Login)
                      .then(function(response){
                        $scope.data=[response.data];
                        $scope.Login=$scope.data[0].login;
                        $scope.Followers=$scope.data[0].followers;
                        $scope.Following=$scope.data[0].following;
                        $scope.Public_Gists=$scope.data[0].public_gists;
                        $scope.Id=$scope.data[0].id;
                        $scope.Avatar=$scope.data[0].avatar_url;
                        $scope.Type=$scope.data[0].type;
                        console.log($scope.data);
                        console.log($scope.Login);
                        console.log($scope.Followers);
                        console.log( $scope.Following);
                        console.log( $scope.Public_Gists);
                        console.log($scope.Avatar);
                        console.log($scope.Type);
                    })
                 }
})