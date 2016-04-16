(function() {
    angular
        .module('myApp')
        .config(['$stateProvider', '$urlRouterProvider', '$logProvider', '$localStorageProvider', 'RestangularProvider', 'envServiceProvider',
            function appConfig($stateProvider, $urlRouterProvider, $logProvider, $localStorageProvider, RestangularProvider, envServiceProvider) {

                $urlRouterProvider.otherwise('/home');
            }
        ])
})();


// (function () {
//     angular.module('myApp')
//         .config(['$stateProvider', '$urlRouterProvider', function appConfig($stateProvider, $urlRouterProvider) {
//             $urlRouterProvider.otherwise('/home');
//         }])
// })();

//