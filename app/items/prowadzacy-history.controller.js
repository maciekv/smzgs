(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ProwadzacyHistoryController', ProwadzacyHistoryController);

    ProwadzacyHistoryController.$inject = ['$log'];

    /* @ngInject */
    function ProwadzacyHistoryController($log) {
        var vm = this;
        vm.title = 'ProwadzacyHistoryController';

        vm.data = [
            {'date' : '2016-03-02', 'user': {'name': 'admin'}, 'newProwadzacy': {'name' : 'nowy prowadzacy 1 (NK)'}},
            {'date' : '2016-03-12', 'user': {'name': 'cezary'}, 'newProwadzacy': {'name' : 'nowy prowadzacy 2 (DK)'}},
            {'date' : '2016-03-32', 'user': {'name': 'admin'}, 'newProwadzacy': {'name' : 'nowy prowadzacy 1 (JK)' }}
        ];
        activate();

        ////////////////

        function activate() {
        }
    }
})();