(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$log'];

    /* @ngInject */
    function DashboardCtrl($log) {
        var vm = this;
        vm.title = 'DashboardCtrl';

        vm.data1 = [
        {
            "statusText": "Do zrobienia",
            "status": "todo",
            statusType: "todo",
            "amount": 12 
        },

        {
            "statusText": "W realizacji",
            "status": "in_progress",
            statusType: "in_progress",
            "amount": 12 
        },

        {
            "statusText": "W testach",
            "status": "in_progress",
            statusType: "in_progress",
            "amount": 12 
        },

        {
            "statusText": "Zakonczone",
            "status": "done",
            statusType: "done",
            "amount": 12 
        },

        ];
        activate();

        ////////////////

        function activate() {
        }
    }
})();