(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ItemsCtrl', ItemsCtrl);

    ItemsCtrl.$inject = ['$log', '$uibModal', '$parse'];

    /* @ngInject */
    function ItemsCtrl($log, $uibModal, $parse) {
        var vm = this;
        vm.title = 'ItemsCtrl';

        var data = [{
            id: 102,
            dateCreate: "2016-03-23",
            "prowadzacy": "JK",
            "client": {
                name: "nazwaKlienta",
                conact: {
                    "name": "Osoba Kontaktowa"
                }
            },
            "category": "gruby druk",
            "title": "Lorem Lipsum",
            "price": "132.23 zł",
            "termin": "2017-03-02",
            "dateClosed": "2016-12-03",
            "statusText": "Zakonczone",
            "status": "done",
            statusType: "done"
        }, {
            id: 103,
            dateCreate: "2016-04-12",
            "prowadzacy": "BK",
            "client": {
                name: "nazwaKlienta 2",
                conact: {
                    "name": "Osoba Kontaktowa"
                }
            },
            "category": "gruby druk",
            "title": "Lorem Lipsum",
            "price": "132.23 zł",
            "termin": "2017-03-02",
            "dateClosed": "",
            "statusText": "Do zrobienia",
            "status": "todo",
            statusType: "todo"
        }, {
            id: 104,
            dateCreate: "2015-04-12",
            "prowadzacy": "MO",
            "client": {
                name: "nazwaKlienta 3",
                conact: {
                    "name": "Osoba Kontaktowa"
                }
            },
            "category": "gruby druk",
            "title": "Lorem Lipsum",
            "price": "132.23 zł",
            "termin": "2017-03-02",
            "dateClosed": "",
            "statusText": "W realizacji",
            "status": "in_progress",
            "statusType": "in_progress"
        }, {
            id: 105,
            dateCreate: "2013-04-12",
            "prowadzacy": "MO",
            "client": {
                name: "nazwaKlienta 3",
                conact: {
                    "name": "Osoba Kontaktowa"
                }
            },
            "category": "gruby druk",
            "title": "Lorem Lipsum",
            "price": "132.23 zł",
            "termin": "2017-03-02",
            "dateClosed": "2016-12-03",
            "statusText": "Zakonczone",
            "status": "done",
            statusType: "done"
        }, ];

        vm.data = data;
        vm.open = open;
        vm.prowadzacyHistory = prowadzacyHistory;
        vm.terminHistory = terminHistory;
        vm.correction = correction;
        vm.open1 = open1;
        vm.open2 = open2;

        vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        vm.format = vm.formats[0];
        vm.dt1 = new Date();
        vm.dt2 = new Date();
        vm.altInputFormats = ['M!/d!/yyyy'];
        vm.dateOptions = {
            // dateDisabled: disabled,
            formatYear: 'yy',
            //maxDate: new Date(2020, 5, 22),
            //minDate: new Date(),
            startingDay: 1
        };



        //open();
        activate();

        ////////////////

        function activate() {}


        function prowadzacyHistory(item) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'items/prowadzacy-history.tpl.html',
                controller: 'ProwadzacyHistoryController as prowHCtrl',
                size: "md",
                resolve: {}

            });

            modalInstance.result.then(function(selectedItem) {

            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }

        function terminHistory(item) {
       
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'items/termin-history.tpl.html',
                controller: 'TerminHistoryController as terminHCtrl',
                size: "md",
                resolve: {
                    'item': [function() {
                        return item || false;
                    }]
                }
            });

            modalInstance.result.then(function(selectedItem) {

            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }

        function open1() {
            if (!$parse('opened')(vm.popup1)) {
                vm.popup1 = {};    
            }
            vm.popup1.opened = true;
        };

        function open2() {
            if (!$parse('opened')(vm.popup2)) {
                vm.popup2 = {};    
            }            
            vm.popup2.opened = true;
        };


        function correction(item) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'items/correction-edit.tpl.html',
                controller: 'CorrectionController as correctionCtrl',
                size: "lg",
                resolve: {
                    'item' : [function(){
                        return item || false;
                    }]
                }
            });

            modalInstance.result.then(function(selectedItem) {

            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };


        function open(item) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'items/items-edit.tpl.html',
                controller: 'ItemsAddController as itemsAddCtrl',
                size: "lg",
                resolve: {
                    'item' : [function(){
                        return item || false;
                    }]
                }
            });

            modalInstance.result.then(function(selectedItem) {

            }, function() {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }
})();