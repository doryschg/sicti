'use strict';

angular.module("adminApp")

.controller('LoginCtrl', function (authUser) {
	var vm = this;
	vm.loginForm = {
	username: '',
	password: ''
	};

	vm.login = function(){
	authUser.loginApi(vm.loginForm);
	}

}); 