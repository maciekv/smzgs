(function() {
    'use strict';

    angular
        .module('myApp', [
            'ui.router',
            'ngStorage',
            'ui.bootstrap',
            'ngLodash',
            'restangular',
            'environment',
            'myApp.home'
        ]);
})();
 
