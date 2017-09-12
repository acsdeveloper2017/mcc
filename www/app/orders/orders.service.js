/*global angular*/
(function () {
    'use strict';
    function OrderListService($http, $q, Request, Config) {
        var vm = this;
        /*get API to get all services from server*/
        vm.getOrderslist = function (statusType) {
            if (statusType == "all") {
                vm.statusCode = "processing,pending";
                vm.condition  = "in";
            } else {
                vm.statusCode = statusType;
                vm.condition  = "eq";
            }
            vm.OrdersList = Config.apiUrl() + '/orders?searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[filter_groups][0][filters][0][value]='+vm.statusCode+'&searchCriteria[filter_groups][0][filters][0][condition_type]='+vm.condition;
            return Request.get(vm.OrdersList)
                .then(function (list) {
                    vm.defered = $q.defer();
                    vm.defered.resolve(list);
                    return vm.defered.promise;
                });
        }
    }

    angular.module('admin.orders', [])
        .service('OrderListService', OrderListService);
    OrderListService.$inject = ['$http', '$q', 'Request', 'Config'];

}());