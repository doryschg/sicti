
'use strict';
angular.module("adminApp", ["authService","ngRoute","ngResource","toastr","satellizer"])

.config(['$routeProvider','$authProvider','CONFIG','ROLES', function ($routeProvider,$authProvider, CONFIG,ROLES){
  $authProvider.loginUrl = CONFIG.DOMINIO_SERVICIOS+'/login';
  $routeProvider

.when('/inicio', {
		templateUrl: 'templates/publico/index.html'
		
	}) 
.when('/', {
    templateUrl: 'templates/usuario/index.html', 
    controller: 'InicioCtrl'
  }) 

.when('/login', {
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  }) 

.when('/perfil', {
    templateUrl: 'templates/usuario/perfil.html',
    controller: 'PerfilCtrl'
  })

// Institutos
.when('/instituto', {
    templateUrl: 'templates/instituto/listar_institutos.html',
    controller: 'ListarInstitutoCtrl'
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



	.otherwise({ redirectTo: '/inicio'});
}])  

