function AppCtrl($scope, $http) {
  console.log('Hello from controller');

  $http.get('/contactlist').success((response) => {
    console.log('I got the data I requested');
    $scope.contactList = response;
  });
}
