'use strict';
angular.module("adminApp")

.factory('Proyectos', ['$resource','CONFIG', function ($resource,CONFIG){
  return $resource(CONFIG.DOMINIO_SERVICIOS + "/proyectos/:id_proy", {id_proy:"@_id_proy"}, {
    update: {method: "PUT", params: {id_proy: "@id_proy"}}
  })
}])


.factory('Usuarios', ['$resource','CONFIG', function ($resource,CONFIG){
  return $resource(CONFIG.DOMINIO_SERVICIOS + "/usuarios/:id_usuario", {id_usuario:"@_id_usuario"}, {
    update: {method: "PUT", params: {id_usuario: "@id_usuario"}}
  })
}])

