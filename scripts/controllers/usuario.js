'use strict';
angular.module("adminApp")

.controller('InicioCtrl', ['Usuarios','$scope', function (Usuarios, $scope){
  var SesionG = localStorage.getItem("Sesion");
  if (SesionG != null)
  {
    var SesionG = JSON.parse(SesionG);
    //console.log("__sesion de usuario___",SesionG.id);
  
  Usuarios.get({id:SesionG.id}, function(data)
    {
      $scope.usuario = data.usuario;

      if($scope.usuario.sexo=='F' || $scope.usuario.sexo=='f'){
        $scope.ajustes.menu.titulo = "Bienvenida";
      }
      else if($scope.usuario.sexo=='M' || $scope.usuario.sexo=='m'){
        $scope.ajustes.menu.titulo = "Bienvenido";
      }
    });
    $scope.ajustes = {
    menu:{
      items:[
        {nombre:'Inicio', enlace:'#/', estilo:'active'},
        {nombre:'Manual de Usuario', enlace:'#/', estilo:''}]
    }
  }}

  }])

.controller('PerfilCtrl',['$scope','Usuarios','$routeParams', 'toastr',
  function ($scope, Usuarios,$routeParams, toastr){

 var Sesion = localStorage.getItem("Sesion");
  if (Sesion != null)
  {
    var Sesion = JSON.parse(Sesion);
    //console.log("__sesion de usuario___",Sesion.id);
  
  Usuarios.get({id:Sesion.id}, function(data)
    {
      $scope.usuario = data.usuario; 
      if($scope.usuario.sexo=='F')
        {
          $scope.sexo='Femenino';
        }
        else
          {
            $scope.sexo='Masculino';
          }});

 }

}])




