(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('CorrectionController', CorrectionController);

    CorrectionController.$inject = ['$log'];

    /* @ngInject */
    function CorrectionController($log) {
        var vm = this;
        vm.title = 'CorrectionController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();