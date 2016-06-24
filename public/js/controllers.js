'use strict';

var app = angular.module('myApp');

app.controller('aboutCtrl', function($scope, $stateParams) {
  console.log('aboutCtrl!');

  console.log('$stateParams:', $stateParams);

});

app.controller('mainCtrl', function($scope) {
  console.log('mainCtrl!');
});

app.controller('swapiCtrl', function($scope, $state, Samurai) {
  console.log('swapiCtrl!');

  Samurai.getAll()
    .then(res => {
      $scope.samurai = res.data;
    })
    .catch(err => {
      console.error('err:', err);
    });

  $scope.clickButton = () => {
    console.log('click!');
    $state.go('about', {myParam: 'QWERTYU'});
  };

});
