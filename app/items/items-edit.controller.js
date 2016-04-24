(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('ItemsAddController', ItemsAddController);

    ItemsAddController.$inject = ['$log', 'item'];

    /* @ngInject */
    function ItemsAddController($log, item) {
        var vm = this;
        vm.title = 'ItemsAddController';

        if (item) {
            vm.item = item;
        }
        activate();

        ////////////////

        function activate() {
        }

        vm.dateOptions = {
            // dateDisabled: disabled,
            formatYear: 'yy',
            // maxDate: new Date(2020, 5, 22),
            // minDate: new Date(),
            startingDay: 1
        };
        vm.popup1 = {};
        vm.open1 = function open1() {
            // alert('s');
            vm.popup1.opened = true;
        };

        vm.popup2 = {};
        vm.open2 = function open2() {
            // alert('s');
            vm.popup2.opened = true;
        };



    }
})();