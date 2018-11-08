/**
 * Created by ruben on 16/11/2015.
 */
(function () {
    'use strict';

    angular.module('accesoModulo')
        .controller('PortalControlador', PortalControlador);

    PortalControlador.$inject = ['$scope', '$log'];

    /* @ngInject */
    function PortalControlador($scope, $log) {
        /* jshint validthis: true */
        var portalCtrl = this;

        activar();

        function activar(){
            $log.info("Activar PortalControlador");
        };

    }
})();
