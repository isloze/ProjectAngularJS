/**
 * Created by ruben on 16/11/2015.
 */
(function () {
    angular
        .module('sit')
        .controller('SitControlador', SitControlador);

    SitControlador.$inject = ['$rootScope', '$scope', '$log'];

    /* @ngInject */
    function SitControlador($rootScope, $scope, $log) {
        /* jshint validthis: true */
        var sitCtrl = this;
        activar();

        function activar(){
            $log.info("Activar SitControlador");
        }

    }
})();
