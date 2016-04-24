(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('CorrectionController', CorrectionController);

    CorrectionController.$inject = ['$log', 'SETTINGS'];

    /* @ngInject */
    function CorrectionController($log, SETTINGS) {
        var vm = this;
        vm.title = 'CorrectionController';
        vm.SETTINGS = SETTINGS
        activate();

        ////////////////

        function activate() {
        }
    }
})();