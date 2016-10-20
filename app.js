(function() {
    'use strict';

    angular.module('LunchChecker', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.list = "";
        $scope.message = "";
        var myArray = [];

        $scope.checkItems = function() {
            myArray = $scope.list.split(",").filter(function(el) {return el.length != 0});
            $scope.myStyle = ''

            if ($scope.list == "") {
                $scope.message = "Please enter data first!";
                $scope.myStyle = 'msg2';
            }
            else if (myArray.length < 4) {
                $scope.message = "Enjoy!";
                $scope.myStyle = 'msg1';
            }
            else if (myArray.length > 3) {
                $scope.message = "Too much!";
                $scope.myStyle = 'msg1';
            }
        }
    }

}) ();
