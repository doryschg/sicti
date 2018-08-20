
'use strict';
angular.module("adminApp")

.controller('ListarInstitutoCtrl',['$scope', '$routeParams','Institutos','toastr',
function ($scope, $routeParams,Institutos,toastr){
  $scope.ajustes = {
      menu:{
        titulo: 'Gestión de Institutos'},
        pagina:{titulo:'Institutos'}
  };
  
  Institutos.get(function(data)
  {
    $scope.instituto = data.instituto;
    console.log($scope.instituto);
  } );


}])

.controller('CrearInstitutoCtrl',['$scope', 'Institutos','$routeParams','toastr', '$location','$timeout',
  function ($scope, Proyectos,Usuarios,$routeParams,toastr,$location,$timeout){
  $scope.ajustes = {
    menu:{
      titulo: 'Gestión de Proyectos',
      items:[
         {nombre:'Proyectos', enlace:'#/proyecto', estilo:''},
        {nombre:'Crear Proyecto', enlace:'#/proyecto/ver', estilo:'active'}
        ]
    },
    pagina:{
      titulo:'Crear Proyectos',
      action: "GUARDAR"}

  }

  $scope.proyecto={
    titulo_proy:"PROYECTO PRUEBA",
    tipo_inv:"INVERSION",
    tipo_servicio:"SERVICIO",
    obj_gen:"GENERAL",
    alcance:"ALCANCE",
    poblacion:"POBLACION",
    resumen:"resumen",
    porc_ejec:"EJECUCION",
    estado:"activo",
    area_proy:"PROYECTO",
    fecha_inicio:"",
    fecha_fin:"",
    circunscripcion:"CINS",
    doc_pdf:"doc.pdf",
    id_usuario:null
  }

Usuarios.get(function(data)
  {
    $scope.usuario = data.usuario;
    console.log($scope.usuario);
  } );

$scope.submit =function()
  {
    Proyectos.save($scope.proyecto).$promise.then(function(data)
    {
      if(data.msg)
      {
        console.log("DATA",data);
        angular.copy({},$scope.proyecto);
        $scope.ajustes.pagina.success ="PROYECTO CREADO EXITOSAMENTE";
        toastr.success('PROYECTO REGISTRADO CORRECTAMENTE');
            $timeout(function() {
                $location.path('/proyecto/ver/'+data.proyecto.id_proy);
            },1000);
        }       
  
    },function () {
        toastr.error("Error inesperado");
      });
  }

    $scope.reset = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
  };
}])

.controller('VerProyectoCtrl',['$scope', 'Proyectos','$routeParams', '$route', 'toastr', '$location','$timeout',
  function ($scope, Proyectos,$routeParams, $route, toastr, $location,$timeout){
  $scope.ajustes = {
    menu:{
      titulo: 'Gestión de Proyectos',
      items:[
        {nombre:'Proyectos', enlace:'#/proyecto', estilo:''}
        ]
    },
    pagina:{
      titulo:'Informacion del proyecto: '
    }
  }
    var id_proy=$routeParams.id_proy;
    Proyectos.get({id_proy:id_proy},function(data){
      $scope.proyecto=data.proyecto;
      $scope.usuario=data.usuario;
      
    })

}])



.controller('EditarProyectoCtrl', ['$scope', 'Proyectos', '$routeParams', '$location', '$timeout', 'toastr', function ($scope,Proyectos, $routeParams, $location, $timeout, toastr) 
{
  $scope.ajustes = {
      menu:{
        titulo: 'Gestión de Proyectos',
        items:[
          {nombre:'Proyectos', enlace:'#/proyecto', estilo:''},
          {nombre:'Editar Proyecto', enlace:'#/proyecto/ver', estilo:''}]
      },
      pagina:{
        titulo:'Editar Proyecto',
        action: "EDITAR"
      }
  };
  
  var id_proy = $routeParams.id_proy;
  Proyectos.get({id_proy:id_proy}, function(data)
  {
    $scope.proyecto = data.proyecto;
  });

$scope.submit =function()
  {
    Proyectos.update({id_proy:id_proy}, $scope.proyecto).$promise.then(function(data)
    {
      if(data.status)
      {
        console.log("DATA edit",data);
      
        $scope.ajustes.pagina.success ="LOS DATOS FUERON ACTUALIZADOS CORRECTAMENTE";
        toastr.success('LOS DATOS FUERON ACTUALIZADOS CORRECTAMENTE');
            $timeout(function() {
                $location.path('/proyecto/ver/'+data.proyecto.id_proy);
            },200);
        }       
  
    },function () {
        toastr.error("Error inesperado");
      });
  }

}])