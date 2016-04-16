(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ItemsAddController', ItemsAddController);

    ItemsAddController.$inject = ['$log'];

    /* @ngInject */
    function ItemsAddController($log) {
        var vm = this;
        vm.title = 'ItemsAddController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();