/**
 * Created by swapnil on 19/9/16.
 */
(function () {
    'use strict';
    angular.module('admin.loader', [])
        .factory('Loader', function ($ionicLoading) {
            return {
                startLoading: function () {
                    $ionicLoading.show({
                        template: '<ion-spinner icon="bubbles">aaa</ion-spinner>'
                    });
                },

                stopLoading: function () {
                    $ionicLoading.hide();
                },

                startLoadingMessage: function (message) {
                    $ionicLoading.show({
                        template: message
                    });
                },

                stopLoadingMessage: function () {
                    $ionicLoading.hide();
                },

                showWithPercentage: function () {
                    $ionicLoading.show({
                        template: '<ion-spinner icon="bubbles">aaa</ion-spinner> <br/> <p>0% Uploaded..</p>'
                    });
                },

                updatePercentage: function (value) {
                    $ionicLoading.show({
                        template: '<ion-spinner icon="bubbles">aaa</ion-spinner> <br/> <p>' + value + '% Uploaded..</p>'
                    });
                }
            };
        }
    );
})();