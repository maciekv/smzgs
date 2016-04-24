(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ClientsController', ClientsController);

    ClientsController.$inject = ['$log', '$uibModal'];

    /* @ngInject */
    function ClientsController($log, $uibModal) {
        var vm = this;
        vm.title = 'ClientsController';
        vm.open = open;
        vm.data = [{
            id: 1,
            'name': 'x-gs',
            'langDef': 'PL',
            'defAcceptPrice': 1,
            'persons': 2,
            'orders': 12
        }, {
            id: 2,
            'name': 'Zbyszek Kulski',
            'langDef': 'PL',
            'defAcceptPrice': 0,
            'persons': 1,
            'orders': 44
        }, {
            id: 3,
            'name': 'Firma 1',
            'langDef': 'PL',
            'defAcceptPrice': 1,
            'persons': 13,
            'orders': 124
        }, {
            id: 4,
            'name': 'Olewidz & Syn',
            'langDef': 'PL',
            'defAcceptPrice': 0,
            'persons': 2,
            'orders': 0
        }, ];

        activate();

        ////////////////

        function activate() {}


        function open() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'clients/client-edit.tpl.html',
                controller: 'ClientEditController as clientEditCtrl',
                size: "lg",
                resolve: {}

            });

            modalInstance.result.then(function(selectedItem) {

            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }
    }
})();