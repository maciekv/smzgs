(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ClientEditController', ClientEditController);

    ClientEditController.$inject = ['$log', 'client'];

    /* @ngInject */
    function ClientEditController($log, client) {
        var vm = this;
        vm.title = 'ClientEditController';
         $log.debug(client);
        vm.client = client;
        activate();

        ////////////////

        function activate() {
        }
    }
})();