(function () {
    'use strict';

    angular.module('app')
        .config(config);

    config.$inject = [
        '$stateProvider', 
        '$urlRouterProvider'
    ];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('', '/dashboard');
        $urlRouterProvider.when('/', '/dashboard');

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('root', {
                abstract: true,
                url: '/',
                data: { },
                views: {
                    'header': {
                        templateUrl: 'core/navigation/headerView.html',
                        controller: 'HeaderController',
                        controllerAs: 'headerController',
                    },
                    'menu': {
                        templateUrl: 'core/navigation/menuView.html',
                        controller: 'MenuController',
                        controllerAs: 'menuController'
                    },
                    'content': {
                        template: 'Choose option from menu...'
                    },
                    'footer': {
                        templateUrl: 'core/navigation/footerView.html',
                        controller: 'FooterController',
                        controllerAs: 'footerController'
                    }
                }
            })
            .state('root.dashboard', {
                url: 'dashboard',
                data: { },
                views: {
                    'content@': {
                        templateUrl: 'core/dashboard/dashboardView.html',
                        controller: 'DashboardController',
                        controllerAs: 'dashboardController'
                    }
                }
            })
            ;
    }
})();
