
'use strict';
angular.module("adminApp", ["authService","ngRoute","ngResource","toastr","satellizer"])

.config(['$routeProvider','$authProvider','CONFIG', function ($routeProvider,$authProvider, CONFIG){
  $authProvider.loginUrl = CONFIG.DOMINIO_SERVICIOS+'/login';
  $routeProvider

.when('/inicio', {
		templateUrl: 'templates/publico/index.html'
		//controller: 'ListarProyCtrl'
	})  

// Proyectos
	.when('/proyecto', {
		templateUrl: 'templates/proyecto/listar_proyectos.html',
		controller: 'ListarProyectoCtrl'
	}) 
	
	.when('/proyecto/crear', {
		templateUrl: 'forms/proyecto/crear.html',
		controller: 'CrearProyectoCtrl'
	}) 
	
	.when('/proyecto/ver/:id_proy', {
		templateUrl: 'templates/proyecto/ver_proyecto.html',
		controller: 'VerProyectoCtrl'
	})  
	
	.when('/proyecto/editar/:id_proy', {
		templateUrl:'forms/proyecto/editar.html',
		controller: 'EditarProyectoCtrl'
	}) 

.when('/login', {
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  }) 

	.otherwise({ redirectTo: '/inicio'});
}])  

