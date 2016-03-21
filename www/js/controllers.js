angular.module('app.controllers', [])
  
.controller('activityCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope, LoginService, $ionicPopup, $state, $http, $httpParamSerializerJQLike) {

    

    // $http.get("http://10.36.15.51:8000/custom/get/?format=json")
    // jsonp('http://10.36.15.51:8000/custom/get/?format=json');


	$scope.data = {};
    var name =(window.localStorage.getItem("dhaussjauhxdjuzlgzuglscfasshdausdjfkjzasd")) ;
    var pass =(window.localStorage.getItem("uhadlfdlfgghfrejajkfdfhzjudfakjhbfkjagfjufug")) ;

    if (name!=null && pass!=null){

       
         LoginService.loginUser(name, pass).success(function(data) {
            $state.go('activity');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!1'
            });
        });
    }
    $scope.login = function() {
        console.log(window.btoa($scope.data.username))  
        LoginService.loginUser(window.btoa($scope.data.username),window.btoa($scope.data.pass)).success(function(data) {
            $state.go('activity');

         
           
            window.localStorage.setItem("dhaussjauhxdjuzlgzuglscfasshdausdjfkjzasd",window.btoa($scope.data.username))
            window.localStorage.setItem("uhadlfdlfgghfrejajkfdfhzjudfakjhbfkjagfjufug",window.btoa($scope.data.pass))
          
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!2'
            });
        });
    }
    $scope.test_service = function() {
        $ionicPopup.alert({
            title:"Errorrr",
            template:"testttt dulu bos"
        });

    }
})


.controller('menuCtrl', function($scope) {

})
 