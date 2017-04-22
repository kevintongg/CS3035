const myApp = angular.module('todoApp', []);

myApp.controller('AppCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http.get('/todo/').then((response) => {
      $scope.todo = response.data;
    });

    function refresh() {
      console.log('Message from controller');
      $http.get('/todo/').then((response) => {
        $scope.todo = response.data;
      });
      window.location.reload();
    }

    $scope.addTodo = function () {
      console.log($scope.todo);
      $http.post('/todo/', $scope.todo).then((response) => {
        console.log(response);
        refresh();
      });
    };

    $scope.remove = function (id) {
      console.log(id);
      $http.delete('/todo/' + id).then(() => {
        refresh();
      });
    };

    $scope.update = function () {
      console.log($scope.todo._id);
      $http
        .put('/todo/' + $scope.todo._id, $scope.todo)
        .then(() => {
          refresh();
        });
    };

    $scope.clear = function () {
      $scope.todo = '';
    };

    $scope.edit = function (id) {
      console.log(`ID: ${id}`);
      $http.get('/todo/' + id).then((response) => {
        $scope.todo = response.data;
      });
    };
  },
]);
