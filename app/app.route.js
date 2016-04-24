(function() {
    angular
        .module('myApp')
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$logProvider', '$localStorageProvider', 'RestangularProvider', 'envServiceProvider'];


    function appConfig($stateProvider, $urlRouterProvider, $logProvider, $localStorageProvider, RestangularProvider, envServiceProvider) {

        $urlRouterProvider.otherwise('/home');
    }


    //////// settings /////////

    var settings = {
        dateFormat: 'yyyy/MM/dd'
    };
    
    angular
        .module('myApp')
        .constant("SETTINGS", settings);


})();
