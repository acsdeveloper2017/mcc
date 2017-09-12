(function () {
    'use strict';
    angular.module('admin.networkInformation', [])
        .factory('NetworkInformation', function ($cordovaNetwork) {
            return {
                hasNetworkConnection: function () {
                    if ($cordovaNetwork.isOnline()) {
                        return true;
                    } else {
                        return false;
                    }
                }
            };
        });
}());

/*(function () {
    'use strict';
    angular.module('zooqit.networkInformation', [])
        .factory('NetworkInformation', function ($cordovaNetwork) {
            return {
                hasNetworkConnection: function () {
                   /!* if (navigator.connection) {
                        var networkState = navigator.connection.type;
                        var isOnline = $cordovaNetwork.isOnline();
                        if (isOnline) {
                            return true;
                        } else {
                            // device has internet connection
                            return false;
                        }
                    } else {
                        return false;
                    }*!/
                    return true;
                }
            };
        }
    );
})();*/
