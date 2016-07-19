angular.module('devmtnTravel')
.controller('locsCtrl', function($scope, $stateParams, mainSrv) {
  $scope.travelInfo = mainSrv.travelInfo;
});
