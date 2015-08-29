(function () {
    'use strict';

    angular.module('NewsFeedApp', ['NewsFeedApp.Services', 'ui.bootstrap'])
        .controller('NewsListController', ['$scope', 'NewsFeedService', newsListController])
        .directive("nfNewsList", [newsListDirective]);

    var baseTemplateUrl = '../../Areas/NewsFeed/Static/Templates/';

    function newsListDirective() {
        var templateName = 'NewsList.html';
        return {
            restrict: 'A',
            templateUrl: baseTemplateUrl + templateName,
            scope: {},
            controller: 'NewsListController',
        };
    }
    function newsListController($scope, newsFeedService) {
        $scope.limitTo = 5;

        var promise = newsFeedService.load();
        promise.success(function (response) {
            $scope.newsItems = response;
        });

        $scope.loadMore = function() {
            $scope.limitTo += 5;
        };
    }
})();