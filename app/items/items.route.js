(function() {
    'use strict';

    angular
        .module('myApp.home')
        .config(config);

    config.$injector = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home.items', {
                url: '/items',
                views: {
                    "main@": {
                        controller: 'ItemsCtrl as itemsCtrl',
                        templateUrl: 'items/list.tpl.html'
                    },
                },
                data: {
                    pageTitle: 'Items'
                },
            });

    }
})();
 