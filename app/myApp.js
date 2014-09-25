var sampleApp = angular.module("myApp", []);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'app/views/home.html',
        controller: 'myController'
      }).
	 when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'aboutController'
      });  /*.
      otherwise({
        redirectTo: '/home'
      }); */
  }]);
