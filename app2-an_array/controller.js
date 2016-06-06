angular.module('arrayApp')
.controller('arrayController', function($scope, mainSrvc) {
  $scope.test = 'What up?!';

function data() {
$scope.myData = mainSrvc.getData();

}
data();
console.log($scope.myData)

})
