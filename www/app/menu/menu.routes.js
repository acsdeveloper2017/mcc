/*global angular*/
(function () {
    'use strict';
    angular.module('admin.menu')
        .config(function ($stateProvider) {
            /*Menu router*/
            $stateProvider
                .state('app.menu', {
                    url: '/menu',
                    templateUrl: 'app/menu/menu.html',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'app/orders/orders.html',
                            controller: 'OrdersCtrl'
                        }
                    }
                });
        });
}());
