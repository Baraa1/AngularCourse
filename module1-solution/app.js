(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        let no_of_items
      $scope.countItems = function () {
        no_of_items = $scope.items.split(',').length;
        if (no_of_items > 3) {
            $scope.message = "Too Much!"
        } else {
            $scope.message = "Enjoy!"
        }
      };    
    }
    
})();    