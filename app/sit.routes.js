/**
 * Created by ruben on 16/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('sit')
        .config(configuracion);

    configuracion.$inject = ['$routeProvider', '$httpProvider'];

    /* @ngInject */
    function configuracion($routeProvider, $httpProvider) {

        /* Idiomas validos */

        $routeProvider.when('/', {templateUrl: 'Modulos/Acceso/inicio/inicio.html'});
        $routeProvider.when('/inicio', {templateUrl: 'Modulos/Acceso/inicio/inicio.html'});

        //Portal SIT
        $routeProvider.when('/portalSIT', {
            templateUrl: 'Modulos/Acceso/portalSIT/portalSIT.html',
            controller: 'PortalControlador',
            controllerAs: 'portalCtrl'
        });


        $routeProvider.otherwise({redirectTo: '/inicio'});

        // Interceptor para Token de sesion
        //$compileProvider.debugInfoEnabled(false);
    };
})();
