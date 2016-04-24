(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('AccountController', AccountController);

    AccountController.$inject = ['$log'];

    /* @ngInject */
    function AccountController($log) {
        var vm = this;
        vm.title = 'AccountController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();