(function() {
    'use strict';

    angular
        .module('myApp.home')
        .config(config);

    config.$injector = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home.dashboard', {
                url: '/dashboard',
                views: {
                    "main@": {
                        controller: 'DashboardCtrl as dashboardCtrl',
                        templateUrl: 'dashboard/dashboard.tpl.html'
                    },
                },
                data: {
                    pageTitle: 'Dashboard'
                },
            });

    }
})();
 