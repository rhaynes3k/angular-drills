angular.module('apiApp')
.controller('mainCtrl', function($scope, mainSrvc) {
  $scope.test = 'What the f**k!!!???'

function getData() {
  mainSrvc.getData()
  .then(function(response) {
    $scope.marvel = response.data;
    console.log(response.data.name)
  })


}
getData();



})
