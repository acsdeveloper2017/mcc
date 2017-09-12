(function () {
    'use strict';
    angular.module('admin.orders')
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.orders', {
                    url: '/orders',
                    views: {
                        'menuContent': {
                            templateUrl: 'app/orders/orders.html',
                            controller: 'OrdersCtrl',
                            controllerAs: 'vm'
                        }
                    }
                });
        });
})();