var myApp = angular.module('MyApp', ['ngHtmlCompile']);

function HomeCtrl($scope, $compile) {

    $scope.firstName = 'Bruce';
    $scope.lastName = 'Willis';

    $scope.template = 'First name : <input type="text" ng-model="firstName" />';

    $scope.change = function() {
	$scope.template = 'Last Name : <input type="text" ng-model="lastName" />';
    };
};
