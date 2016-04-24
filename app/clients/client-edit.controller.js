(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ClientEditController', ClientEditController);

    ClientEditController.$inject = ['$log'];

    /* @ngInject */
    function ClientEditController($log) {
        var vm = this;
        vm.title = 'ClientEditController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();