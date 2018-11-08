(function() {
  'use strict';

  /**
   *
   * @type {module|*} "sit" Módulo principal de la aplicación.
   *
   * Dependencias:
   *  AngularJS: ngRoute, ngResource, ngAnimate
   *  Aplicación: accesoModulo
   *
   */
  angular.module('sit',
      [
        'ngRoute',
        'accesoModulo'
      ]);
})();