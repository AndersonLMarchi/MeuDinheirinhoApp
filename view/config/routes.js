angular.module('firstApp').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('dashboard', {
            url: "/dashboard",
            templateUrl: "dashboard/dashboard.html"
        }).state('paymentcycle', {
            url: "/paymentcycle",
            templateUrl: "paymentcycle/tabs.html"            
        });

        $urlRouterProvider.otherwise('/dashboard');
    }
]);