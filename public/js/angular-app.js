var app = angular.module('adherence-partials', []);

app.controller('MainController', function($scope) {
});

app.controller('NavController', function($scope, $location) {
  $scope.isActive = function (viewLocation) { 
      
      return $location.absUrl().indexOf(viewLocation) != -1;
  };
});

