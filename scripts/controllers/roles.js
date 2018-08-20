'use strict';
angular.module("adminApp")
// ************************* CONSTANTES *****************************************************************

// ========================= CONFIGURACION ============================================================================
.constant('CONFIG', {
//ROL_CURRENT_USER: parseInt(localStorage.getItem("ROL_CURRENT_USER"), 10),//este es el usuario que esta logueado
//ROL_CURRENT_USER_NAME: localStorage.getItem("ROL_CURRENT_USER_NAME"),


DOMINIO_SERVICIOS: "http://localhost/api_sicti/public" })

// ========================= ROLES ============================================================================

.constant('ROLES', {
   ADMIN_ROOT: {
    ROL:1,
    PATH:"/"
  },
  ADMIN_INSTITUTO: {
    ROL:2,
    PATH:"/"
  },
  INVESTIGADOR: {
    ROL:3,
    PATH:"/"
  }
  
})

.run(["$rootScope", "$location", "CONFIG", "ROLES", function($rootScope, $location, CONFIG, ROLES){
  $rootScope.$on('$routeChangeStart', function (event, next)
  { 
    /*console.log(next.data);*/
    if(next.data !== undefined)
    { 
      if(next.data.authorized.indexOf(CONFIG.ROL_CURRENT_USER) !== -1)
      {
        //console.log("entra");
      }
      else
      {
        if (CONFIG.ROL_CURRENT_USER == 1) {
          $location.path(ROLES.ADMIN_ROOT.PATH);
        }
        else if (CONFIG.ROL_CURRENT_USER == 2) {
          $location.path(ROLES.ADMIN_INSTITUTO.PATH);
        }
        else if (CONFIG.ROL_CURRENT_USER == 3) {
          $location.path(ROLES.INVESTIGADOR.PATH);
        }
        
      }
    }
  });
}])