/*global angular*/
/*global localStorage*/
(function () {
    'use strict';
    angular.module('admin.request.service', [])
        .factory("Request", function ($http, $q,Loader) {
            return {
                get: function (url, callback) {
                    var deferred = $q.defer();
                        Loader.startLoading();
                        var cb = callback || angular.noop;
                        $http.get(url).success(function (response, status) {
                            if (status === 200) {
                                Loader.stopLoading();
                                deferred.resolve(response);
                                return cb(response);
                            } else {
                                Loader.stopLoading();
                                deferred.reject(response.message);
                                return cb(response);
                            }
                        }).error(function (err) {
                            Loader.stopLoading();
                            //deferred.reject("Timeout");
                            // $ionicPopup.alert({
                            //     title: 'Error',
                            //     template: err.message
                            // }).then(function (res) {
                            //     console.log(res);
                            //     // do nothing
                            // });
                            return cb(err);
                        }.bind(this));
                    return deferred.promise;
                },
                post: function (url, postData, callback) {
                    var deferred = $q.defer();
                        //Loader.startLoading();
                        var cb = callback || angular.noop;
                        $http.defaults.headers.post["Content-Type"] = "application/json";
                        $http.post(url, postData).success(function (response, status) {
                            if (status === 200) {
                                //Loader.stopLoading();
                                deferred.resolve(response);
                                return cb();
                            } else {
                               // Loader.stopLoading();
                                deferred.reject(response.message);
                                return cb(response);
                            }
                        }).error(function (err) {
                            //Loader.stopLoading();
                            deferred.reject();
                            // $ionicPopup.alert({
                            //     title: 'Error',
                            //     template: err.message
                            // }).then(function (res) {
                            //     console.log(res);
                            // });
                            return cb(err);
                        }.bind(this));
                    return deferred.promise;
                },
                patch: function (url, postData, callback) {
                    var deferred = $q.defer();
                       // Loader.startLoading();
                        var cb = callback || angular.noop;
                        $http.defaults.headers.post["Content-Type"] = "application/json";
                        $http.patch(url, postData).success(function (response, status) {
                            if (status === 200) {
                               // Loader.stopLoading();
                                deferred.resolve(response);
                                return cb();
                            } else {
                                //Loader.stopLoading();
                                deferred.reject(response.message);
                                return cb(response);
                            }
                        }).error(function (err) {
                            //Loader.stopLoading();
                            deferred.reject();
                            // $ionicPopup.alert({
                            //     title: 'Error',
                            //     template: err.message
                            // }).then(function (res) {
                            //     // do nothing
                            // });
                            return cb(err);
                        }.bind(this));
                    return deferred.promise;
                },
                delete: function (url, postData, callback) {
                    var deferred = $q.defer();
                        //Loader.startLoading();
                        var cb = callback || angular.noop;
                        $http.defaults.headers.post["Content-Type"] = "application/json";
                        console.log(postData);
                        $http.delete(url, postData).success(function (response, status) {
                            if (status === 200) {
                                //Loader.stopLoading();
                                deferred.resolve(response);
                                return cb();
                            } else {
                                //Loader.stopLoading();
                                deferred.reject(response.message);
                                return cb(response);
                            }
                        }).error(function (err) {
                            //Loader.stopLoading();
                            //deferred.reject("Timeout");
                            // $ionicPopup.alert({
                            //     title: 'Error',
                            //     template: err.message
                            // }).then(function (res) {
                            //     // do nothing
                            // });
                            return cb(err);
                        }.bind(this));
                    return deferred.promise;
                }
            };
        })
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push('AuthInterceptor');
        }]
        ).factory('AuthInterceptor', function () {
            return {
                request: function (config) {
                    config.headers = config.headers || {};

                    config.headers.Authorization = "Bearer w22y8473popl4t0fa78nsxtqffrh3xq3"
                    config.headers['Content-Type'] = 'application/json';
                    //config.timeout = 10000;
                    return config;
                }
            };
        }
        );
}());
