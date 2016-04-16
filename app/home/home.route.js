(function() {
    'use strict';

    angular
        .module('myApp.home')
        .config(config);

    config.$injector = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    "topnav": {
                        // controller: 'HomeCtrl as homeCtrl',
                        templateUrl: 'home/topnav.tpl.html'
                    },                    
                    "main": {
                        controller: 'HomeCtrl as homeCtrl',
                        templateUrl: 'home/home.tpl.html'
                    },
                    "sidebar": {
                       // controller: 'SidebarController as sidebarCtrl',
                        templateUrl: 'home/sidebar.tpl.html',
                        resolve: {

                        }

                    }
                },
                data: {
                    pageTitle: 'Home'
                },
            });

    }
})();
 