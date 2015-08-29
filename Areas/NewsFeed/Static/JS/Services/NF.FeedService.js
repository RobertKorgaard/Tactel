(function () {
    'use strict';

    angular.module('NewsFeedApp.Services', [])
        .factory('NewsFeedService', ['$http', newsFeedService]);

    var feedUrl = '/NewsFeed/GetNewsFeed';

    function newsFeedService($http) {
        var obj = {};

        obj.load = function () {
            return $http.get(feedUrl);
        }

        return obj;
    }
})();