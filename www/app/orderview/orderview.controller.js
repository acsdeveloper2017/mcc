/*global angular*/
/*global ionic*/
/*jslint plusplus: true */
(function () {
    'use strict';
    function OrdersViewCtrl($state, $scope, SingleOrderFactory, $rootScope, Config) {
        var vm = this;
        vm.isOrdersEmpty = false;
        vm.OrdersList = [];
        //console.log(Config.apiUrl())
        vm.getOrder = SingleOrderFactory.getblocks();
        vm.filterOptions = vm.getOrder.status;
        console.log(vm.getOrder);
        vm.getOrder.customername = (vm.getOrder.customer_is_guest == 1) ? "Guest" : vm.getOrder.customer_firstname +' '+ vm.getOrder.customer_lastname
    }

    angular.module('admin.orderview', [])
        .controller('OrdersViewCtrl', OrdersViewCtrl)
    OrdersViewCtrl.$inject = ['$state', '$scope','SingleOrderFactory','$rootScope', 'Config'];
}());
