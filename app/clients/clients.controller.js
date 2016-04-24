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
        vm.remove = remove;

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

        function remove(client) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'clients/clients-rem.tpl.html',
                controller: 'ClientsRemController as clientsRemCtrl',
                size: "md",
                resolve: {
                    'client': [function() {
                        return client || false;
                    }]
                }
            });

            modalInstance.result.then(function(selectedItem) {
                activate();
            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }


        function open(client) {

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'clients/client-edit.tpl.html',
                controller: 'ClientEditController as clientEditCtrl',
                size: "lg",
                resolve: {
                    'client': [function(){
                        return client || false;
                    }]
                }

            });

            modalInstance.result.then(function(client) {
                activate();
            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }
    }
})();