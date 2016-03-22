angular.module('app.controllers', [])
  
.controller('mENUUTAMACtrl', function($scope) {

})
   

.controller('mENULOGINCtrl', function($scope, LoginService, $ionicPopup, $state, $http, $httpParamSerializerJQLike) {


    

    // $http.get("http://10.36.15.51:8000/custom/get/?format=json")
    // jsonp('http://10.36.15.51:8000/custom/get/?format=json');


	$scope.data = {};
    var name =(window.localStorage.getItem("dhaussjauhxdjuzlgzuglscfasshdausdjfkjzasd")) ;
    var pass =(window.localStorage.getItem("uhadlfdlfgghfrejajkfdfhzjudfakjhbfkjagfjufug")) ;

    if (name!=null && pass!=null){

       
         LoginService.loginUser(name, pass).success(function(data) {
            $state.go('sALESACTIVITY');
        
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
            $state.go('sALESACTIVITY');

         
           
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

   
.controller('sUBMENUSALESCtrl', function($scope) {

})
   
.controller('mENUACTIVITYCtrl', function($scope) {

})
   
.controller('sALESACTIVITYCtrl', function($scope,$http) {
    var name =(window.localStorage.getItem("dhaussjauhxdjuzlgzuglscfasshdausdjfkjzasd")) ;
    var pass =(window.localStorage.getItem("uhadlfdlfgghfrejajkfdfhzjudfakjhbfkjagfjufug")) ;
    // var user_id="a"; 
    // console.log(pass)
     $http(
                {
                    method: 'POST',
                    url: 'http://10.36.15.51:8000/openerp/sales.activity/',
                    data: {'usn':name,'pw':pass},
                    headers: {
                        'Authorization': 'Basic ' + "cmV6YTpzdXByYWJha3Rp",
                      
                    },
                    // para
                }
            ).then(
                function successCallback(response){
                    console.log('success');
                    $scope.user_id = response.data['Result']['user_id'][1]
                    $scope.date_begin =  response.data['Result']['begin']
                    $scope.date_end =  response.data['Result']['end']
                    
                    // console.log(response.data['Result']['end'])
                    // console.log(response.data['Result']['begin'])
       
                },
                function errorCallback(response){
                    console.log('erroor');
                }
            )
         
})
   
.controller('fORMACTIVITYCtrl', function($scope) {

})
   
.controller('pREVIEWPLANACTIVITYCtrl', function($scope) {

})
   
.controller('fORMUPDATEACTIVITYCtrl', function($scope) {


})
 