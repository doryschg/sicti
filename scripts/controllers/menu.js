'use strict';

angular.module('adminApp')
	.controller('MenuCtrl', ['$auth','authUser', '$location', '$scope', 'sessionControl', 'ROLES', 'CONFIG', '$routeParams',
		function ($auth,authUser, $location, $scope, sessionControl, ROLES, CONFIG, $routeParams){
		var vm = this;
		vm.isLogin = authUser.isLoggedIn();

		$scope.$watch(function(){
			return authUser.isLoggedIn();
		}, function(newVal){
			if (typeof newVal !== 'undefined') {
				vm.isLogin = authUser.isLoggedIn();
			}			
		});

		vm.user = {
			username: sessionControl.get('username'),
			//rol_id: sessionControl.get('rol_id'),
		}
				
		///$watch es para mostrar el dato
		$scope.$watch(function(){
			return sessionControl.get('username');
		}, function(newVal){
			if (typeof newVal !== 'undefined') {
				vm.user.username = sessionControl.get('username');
			}			
		});

		vm.logout = function(){
			authUser.logout();
		};

		vm.isActive = function (viewLocation){
			return viewLocation == $location.path();
		};
	
	}])
