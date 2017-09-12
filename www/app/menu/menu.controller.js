/*global angular*/
/*global localStorage*/
/*global document*/
/*jslint plusplus:true*/
(function () {
    'use strict';
    function MenuCtrl($state, $rootScope, SingleOrderFactory) {
        var vm = this;
    }

    angular.module('admin.menu', [])
        .controller('MenuCtrl', MenuCtrl);
    MenuCtrl.$inject = ['$state', '$rootScope', 'SingleOrderFactory'];
}());
