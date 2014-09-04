'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('LandingPageController', [function() {

  }])
  .controller('BikeController', ['$scope', 'bikeService', 'authService', function($scope, bikeService, authService) {

  	// Bind bikes to $scope.bikes.
  	authService.getCurrentUser().then(function(user) {
  		if(user) {
  			$scope.bikes = bikeService.getBikes(user.id);
  		};
  	});

  	// Object to store data from the bike form.
  	$scope.newBike = {name: '', color: '', size: '', verified: false};

  	// Function to save a new bike.
  	$scope.saveBike = function() {
  		bikeService.saveBike($scope.newBike, $scope.currentUser.id);
  		// Reset the newBike variable
      $scope.newBike = {name: '', color: '', size: '', verified: false};
  	};

  }])
	.controller('AuthController', ['$scope', 'authService', function($scope, authService) {

		// Objcet bond to inputs on the register and login pages.
		$scope.user = {email: '', password: ''};

		$scope.register = function() {
			authService.register($scope.user);
		};

		$scope.login = function() {
			authService.login($scope.user);
		};
		$scope.logout = function() {
			authService.logout();
		};

	}]);