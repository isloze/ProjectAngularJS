/**
 * Created by ruben on 16/11/2015.
 */
/**
 * Created by Rice on 15-02-05.
 */
(function() {
    'use strict';

    angular.module('accesoModulo')
        .factory('accesoServicios', accesoServicios);

    accesoServicios.$inject = ['$resource', '$window', '$q', '$log'];

    /* @ngInject */
    function accesoServicios($resource, $window, $q, $log) {

    };
})();
