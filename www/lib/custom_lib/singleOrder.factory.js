/*global angular*/
(function () {
    'use strict';
    function SingleOrderFactory() {
        var service = null,
            stylist = null,
            date = null,
            rewardUsed = false,
            reward = null,
            array = [],
            blocks = null,
            productpage = null;
        var fromFeed = false;
        return {
            getproduct: function () {
                return array;
            },
            putproduct: function (arrayObject) {
                array = arrayObject;
            },
            getblocks: function () {
                return array;
            },
            putblocks: function (arrayObject) {
                array = arrayObject;
            },
            getarray: function () {
                return array;
            },
            putarray: function (arrayObject) {
                array = arrayObject;
            },
            getService: function () {
                return service;
            },
            putService: function (serviceObject) {
                service = serviceObject;
            },
            getStylist: function () {
                return stylist;
            },
            putStylist: function (stylistObject) {
                stylist = stylistObject;
            },
            getDate: function () {
                return date;
            },
            putDate: function (dateObject) {
                date = dateObject;
            },
            getReward: function () {
                return reward;
            },
            putReward: function (rewardObject) {
                reward = rewardObject;
            },
            isRewardUsed: function () {
                return rewardUsed;
            },
            setFromFeed:function(value) {
                fromFeed = value;
            },
            isFromFeed: function () {
                return fromFeed;
            },
            setIsRewardUsed: function (value) {
                rewardUsed = value;
            },
            clearBookingData: function () {
               //service = null;
                stylist = null;
                date = null;
                rewardUsed = false;
                reward = null;
                fromFeed = false;
                blocks = null,
                productpage = null;
            },
            clearblocks:function()
            {
                blocks = null;
            }
        };
    }

    angular.module('admin.storage', [])
        .factory('SingleOrderFactory', SingleOrderFactory);
    SingleOrderFactory.$inject = [];
}());
