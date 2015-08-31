(function () {
    'use strict';

    angular.module('NewsFeedApp.NewsList', ['NewsFeedApp'])
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
        .controller('NewsListController', ['$scope', 'NewsFeedService', '$timeout', newsListController])
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
    function newsListController($scope, newsFeedService, $timeout) {
        $scope.limitTo = 10;
        $scope.showLoadMore = true;

        var promise = newsFeedService.load();
        promise.success(function (response) {
            $scope.newsItems = response;
        });

        $scope.loadMore = function () {
            $scope.limitTo += 10;
            $scope.showLoadMore = $scope.newsItems.length > $scope.limitTo;
        };

        $scope.$root.$on('searchSelected', function (event, item) {
            $scope.limitTo = $scope.newsItems.length;
            $timeout(function () {
                angular.element('#' + item.Id).collapse('show');
                $scope.showLoadMore = false;
                angular.element('html, body').animate({
                    scrollTop: angular.element('#news' + item.Id).offset().top - 60
                }, 1000);
            }, 200);
        });
    }
})();