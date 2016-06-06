angular.module('filList')
.controller('myCtrl', function($scope, mainSrvc) {

$scope.test = "Something else";

$scope.getData = function() {
    $scope.myData = mainSrvc.getData();
}
$scope.getData();
console.log($scope.getData);



})
