/**
 * Created by ruben on 16/11/2015.
 */
(function () {
    'use strict';

    angular.module('accesoModulo')
        .controller('InicioControlador', InicioControlador);
    /* @ngInject */
    function InicioControlador($scope, $log, $location) {
        /* jshint validthis: true */
        var inicioCtrl = this;

        //Funciones del controador
        inicioCtrl.redireccionar = redireccionar;

        activar();

        function activar(){
            $log.info("Activar InicioControlador");
            inicioCtrl.saludo = "Saludos desde el SIT";
        }

        //Funciones - InicioControlador
        function redireccionar(path){
            $location.path('/' + path);
        };


    }
})();
