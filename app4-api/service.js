angular.module('apiApp')
.service('mainSrvc', function($http) {

this.getData = function() {
return $http({
  method: 'GET',
  url: 'http://swapi.co/api/people/',
}).then(function(response) {
    var status = response.status;
    var data = response.data;
    return response;
  })

}




})
