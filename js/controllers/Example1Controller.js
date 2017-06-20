'use strict';
angular.module('myApp')
  .controller('Example1Controller', function ($scope) {
    $scope.showMessage = false;
    $scope.showSubmitMessage = function () {
      console.log('calling');
      $scope.showMessage = true;
    };
  });