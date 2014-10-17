// declare a module
var myApp= angular.module('RockClimbingApp', ['ngRoute']);

myApp.config(['$routeProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.
		when('/Search/', {
			templateUrl: '/assets/views/search.html.angular',
			controller: 'SearchCtrl'
		}).
		when('/Alert/', {
			templateUrl: '/assets/views/alert.html.angular',
			controller: 'AlertCtrl'
		}).
		when('/User/', {
			templateUrl: '/assets/views/user.html.angular',
			controller: 'UserCtrl'
		}).
		otherwise({
        	redirectTo: '/Search'
      	});
}]);