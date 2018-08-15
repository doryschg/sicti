
'use strict';
angular.module("adminApp", ["ngRoute", "ngResource","toastr"])

/*.config(['$routeProvider', '$authProvider', 'CONFIG', 'ROLES', function ($routeProvider, $authProvider, CONFIG, ROLES){
  $authProvider.loginUrl = CONFIG.DOMINIO_SERVICIOS+'/login';
  $routeProvider */

/*  .config(['$routeProvider', '$authProvider', 'CONFIG', 'ROLES', function ($routeProvider, $authProvider, CONFIG, ROLES){
  $authProvider.loginUrl = CONFIG.DOMINIO_SERVICIOS+'/login'; */

.config(['$routeProvider','CONFIG', function ($routeProvider,CONFIG){
	
	$routeProvider

.when('/inicio', {
		templateUrl: 'templates/index.html'
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

	/*
	.when('/editar/:id_curso', {
		templateUrl: 'templates/editar.html',
		controller: 'EditarCtrl'
	})
	.when('/crear', {
		templateUrl: 'templates/crear.html',
		controller: 'CrearCtrl'
	})   
	.when('/ver_curso/:id_curso', {
		templateUrl: 'templates/ver_curso.html',
		controller: 'VerCtrl'
	}) 

	.when('/ver_modulos/:id_curso', {
		templateUrl: 'templates/ver_modulos.html',
		controller: 'VerModulosCtrl' 
	}) 

	.when('/crear_modulos/:id_curso', {
		templateUrl: 'templates/crear_modulos.html',
		controller: 'CrearModulos' 
	}) 

	.when('/ver_actividades/:id_modulo', {
		templateUrl: 'templates/ver_actividades.html',
		controller: 'VerActividadCtrl' 
	}) 

	.when('/ver_actividad/:id_actividad', {
		templateUrl: 'templates/ver_actividad.html',
		controller: 'Ver_Actividad' 
	})    */

	.otherwise({ redirectTo: '/inicio'});
}])  

