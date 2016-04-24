(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ItemsAddController', ItemsAddController);

    ItemsAddController.$inject = ['$log', '$parse', 'item', 'SETTINGS'];

    /* @ngInject */
    function ItemsAddController($log, $parse, item, SETTINGS) {
        var vm = this;
        vm.title = 'ItemsAddController';
        vm.dateOptions = {
            // dateDisabled: disabled,
            formatYear: 'yy',
            // maxDate: new Date(2020, 5, 22),
            // minDate: new Date(),
            startingDay: 1
        };
        vm.dt1 = new Date();
        
        vm.open1 = open1;
        vm.open2 = open2;

        if (item) {
            vm.item = item;
        }

        vm.SETTINGS = SETTINGS;
        activate();

        ////////////////

        function activate() {}

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
    }
})();