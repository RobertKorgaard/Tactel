(function () {
    'use strict';

    angular.module('NewsFeedApp', ['NewsFeedApp.Services', 'ngAnimate', 'ui.bootstrap'])
                .filter('filterByImage', function () {
                    return function (items) {
                        var filtered = [];
                        angular.forEach(items, function (item) {
                            if (item.ImageUrl.length > 1) {
                                filtered.push(item);
                            }
                        });
                        return filtered;
                    };
                })
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
        $scope.limitTo = 10;

        var promise = newsFeedService.load();
        promise.success(function (response) {
            $scope.newsItems = response;
        });

        $scope.loadMore = function() {
            $scope.limitTo += 10;
        };
    }
})();