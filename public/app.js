var app = angular.module('app', ['ngRoute', 'xeditable','routeStyles']);

app.run(['$rootScope', '$location', function($rootScope, $location) {
  Parse.initialize("BDo39lSOtPuBwDfq0EBDgIjTzztIQE38Fuk03EcR", "ox76Y4RxB06A69JWAleRHSercHKomN2FVu61dfu3");
  $rootScope.currentUser = Parse.User.current();
  $rootScope.location = $location;
}]);
