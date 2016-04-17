(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('TerminHistoryController', TerminHistoryController);

    TerminHistoryController.$inject = ['$log'];

    /* @ngInject */
    function TerminHistoryController($log) {
        var vm = this;
        vm.title = 'TerminHistoryController';

        vm.data = [
            {'date' : '2016-03-02', 'user': {'name': 'admin'}, 'newTermin': "2016-04-02", "description" : "Nieprawidlowy szacunek"},
            {'date' : '2016-03-12', 'user': {'name': 'cezary'}, 'newTermin': "2016-04-04", "description" : "zmiana założen"},
            {'date' : '2016-03-32', 'user': {'name': 'admin'}, 'newTermin': "2016-04-05", "description" : "problemy techniczne"}
        ];
        activate();

        ////////////////

        function activate() {
        }
    }
})();