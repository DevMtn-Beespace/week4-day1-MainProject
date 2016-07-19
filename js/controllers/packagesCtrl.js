angular.module('devmtnTravel')
.controller('packagesCtrl', function($scope, $stateParams, mainSrv) {
  $scope.travelInfo = mainSrv.travelInfo;
  console.log($stateParams);
});
