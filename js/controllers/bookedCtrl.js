angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, $stateParams, $state, mainSrv) {
  $scope.testBooked = "test Booked";
  // console.log($state);
  // console.log($stateParams);

  $scope.id = $stateParams.id;
  for (var i=0; i<=mainSrv.travelInfo.length-1; i++) {
      console.log(mainSrv.travelInfo[i].id);
    if ($stateParams.id === JSON.stringify(mainSrv.travelInfo[i].id)) {
        $scope.city = mainSrv.travelInfo[i].city;
        $scope.image = mainSrv.travelInfo[i].image;
    }
  }
console.log($scope.image);
$scope.myStyle = {'background-image': 'url('+$scope.image+')','background-size': 'cover', 'width': '70vw'};

});
