(function () {
    'use strict';

    angular.module('NewsFeedApp.Search', ['NewsFeedApp'])
        .controller('SearchController', ['$scope', 'NewsFeedService', searchController])
        .directive("nfSearch", [searchDirective]);

    var baseTemplateUrl = '../../Areas/NewsFeed/Static/Templates/';

    function searchDirective() {
        var templateName = 'Search.html';
        return {
            restrict: 'A',
            templateUrl: baseTemplateUrl + templateName,
            scope: {},
            controller: 'SearchController',
        };
    }
    function searchController($scope, newsFeedService) {
        var promise = newsFeedService.load();
        promise.success(function (response) {
            $scope.newsItems = response;
        });
        $scope.list = [];

        $scope.listResult = function(list) {
            console.log(list);
        };

        $scope.onSelected = function (item, model, label) {
            $scope.$root.$emit('searchSelected', item);
        };

    }
})();