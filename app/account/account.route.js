(function() {
    'use strict';

    angular
        .module('myApp.home')
        .config(config);

    config.$injector = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home.account', {
                url: '/account',
                views: {
                    "main@": {
                        controller: 'AccountController as accountCtrl',
                        templateUrl: 'account/account.tpl.html'
                    },
                },
                data: {
                    pageTitle: 'Account'
                },
            });

    }
})();
 