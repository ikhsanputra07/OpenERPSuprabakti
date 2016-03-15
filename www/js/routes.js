angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('mENUUTAMA', {
    url: '/menu',
    templateUrl: 'templates/mENUUTAMA.html',
    controller: 'mENUUTAMACtrl'
  })

  .state('mENULOGIN', {
    url: '/login',
    templateUrl: 'templates/mENULOGIN.html',
    controller: 'mENULOGINCtrl'
  })

  .state('mENUSALES', {
    url: '/menu-sales',
    templateUrl: 'templates/mENUSALES.html',
    controller: 'mENUSALESCtrl'
  })

  .state('sALESACTIVITY', {
    url: '/sales-activity',
    templateUrl: 'templates/sALESACTIVITY.html',
    controller: 'sALESACTIVITYCtrl'
  })

  .state('fORMACTIVITY', {
    url: '/form-activity',
    templateUrl: 'templates/fORMACTIVITY.html',
    controller: 'fORMACTIVITYCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});