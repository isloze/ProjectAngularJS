/**
 * Created by ruben on 16/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('sit')
        .run(runBlock);

    runBlock.$inject = ['$log', '$templateCache', '$rootScope', '$location'];

    /* @ngInject */
    function runBlock($log, $templateCache, $rootScope, $location ) {
        $rootScope.$on('$routeChangeSuccess', function (event, next, previous) {
            $rootScope.previousUrl = previous;
            if (next.loadedTemplateUrl == 'Modulos/Acceso/inicio/inicio.html') {
                $log.info("$routeChangeSuccess");
            }

        });
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            $log.info('Cambio de url');
            $log.info(next.templateUrl);
        });
    }
})();
