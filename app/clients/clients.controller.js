(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ClientsController', ClientsController);

    ClientsController.$inject = ['$log'];

    /* @ngInject */
    function ClientsController($log) {
        var vm = this;
        vm.title = 'ClientsController';

        vm.data = [
            {id:1,'name' : 'x-gs', 'langDef': 'PL', 'defAcceptPrice' : 1, 'persons' : 2, 'orders' : 12},
            {id:2,'name' : 'Zbyszek Kulski', 'langDef': 'PL', 'defAcceptPrice' : 0, 'persons' : 1, 'orders' : 44},
            {id:3,'name' : 'Firma 1', 'langDef': 'PL', 'defAcceptPrice' : 1, 'persons' : 13, 'orders' : 124},
            {id:4,'name' : 'Olewidz & Syn', 'langDef': 'PL', 'defAcceptPrice' : 0, 'persons' : 2, 'orders' : 0},
        ];

        activate();

        ////////////////

        function activate() {
        }
    }
})();