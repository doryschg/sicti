'use strict';
angular.module("adminApp")

.factory('Usuarios', ['$resource','CONFIG', function ($resource,CONFIG){
  return $resource(CONFIG.DOMINIO_SERVICIOS + "/usuarios/:id", {id:"@_id"}, {
    update: {method: "PUT", params: {id: "@id"}}
  })
  }])

 .factory('Institutos', ['$resource','CONFIG', function ($resource,CONFIG){
  return $resource(CONFIG.DOMINIO_SERVICIOS + "/institutos/:id_inst", {id_inst:"@_id_inst"}, {
    update: {method: "PUT", params: {id_inst: "@id_inst"}}
  })
  }])


.factory('Proyectos', ['$resource','CONFIG', function ($resource,CONFIG){
  return $resource(CONFIG.DOMINIO_SERVICIOS + "/proyectos/:id_proy", {id_proy:"@_id_proy"}, {
    update: {method: "PUT", params: {id_proy: "@id_proy"}}
  })
}])




