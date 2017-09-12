/*global angular*/
(function () {
    'use strict';
    angular.module('admin.config', [])
        .constant('Config', {
            'baseUrl': 'https://mccstaging-agilexcyber.c9users.io', // Site Url
            'apiUrl' : function() {return this.baseUrl + '/rest/default/V1';}
        });
}());

