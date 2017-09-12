/*global angular*/
(function () {
    'use strict';
    function MainCtrl($state) {
       $state.go('app.orders');
    }
    angular.module('admin.controllers', [])
        .controller('MainCtrl', MainCtrl);
    MainCtrl.$inject = ['$state'];
}());
