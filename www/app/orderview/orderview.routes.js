(function () {
    'use strict';
    angular.module('admin.orderview')
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.orderview', {
                    url: '/orderview',
                    views: {
                        'menuContent': {
                            templateUrl: 'app/orderview/orderview.html',
                            controller: 'OrdersViewCtrl',
                            controllerAs: 'vm'
                        }
                    }
                });
        });
})();