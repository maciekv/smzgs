(function() {
    'use strict';

    angular
        .module('myApp.home')
        .config(config);

    config.$injector = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home.clients', {
                url: '/clients',
                views: {
                    "main@": {
                        controller: 'ClientsController as clientsCtrl',
                        templateUrl: 'clients/clients.tpl.html'
                    },
                },
                data: {
                    pageTitle: 'Clients'
                },
            });

    }
})();
 