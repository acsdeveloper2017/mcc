/*global angular*/
/*global ionic*/
/*jslint plusplus: true */
(function () {
    'use strict';
    function OrdersCtrl($state, $scope, SingleOrderFactory, $rootScope, Config, OrderListService) {
        var vm = this;
        vm.isOrdersEmpty = false;
        vm.OrdersList = [];
        //console.log(Config.apiUrl())
        vm.filterOptions = "all";
        vm.getOrders = function (statusType) {
            vm.OrdersList = [];
            OrderListService.getOrderslist(statusType).then(function (resp) {
                console.log(resp);
                angular.forEach(resp.items, function (itemslist) {
                    console.log(itemslist);
                    vm.OrdersList.push(itemslist);
                });
            });
        };

        vm.orderview = function(order)
        {
            //console.log(order);
            SingleOrderFactory.putblocks(order);
            $state.go("app.orderview");
        }
        vm.Searchfilter = function()
        {
            console.log(vm.filterOptions);
            vm.getOrders(vm.filterOptions);
        }
        ionic.Platform.ready(function () { 
            vm.getOrders(vm.filterOptions);
        });
    }

    angular.module('admin.orders')
        .controller('OrdersCtrl', OrdersCtrl)
    OrdersCtrl.$inject = ['$state', '$scope','SingleOrderFactory','$rootScope', 'Config', 'OrderListService'];
}());
