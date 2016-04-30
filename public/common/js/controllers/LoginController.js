angular.module('app')
  .controller('LoginController', ['$rootScope', '$scope', 'Parse', 'User', 'UI', '$location', function($rootScope, $scope, Parse, User, UI, $location) {

    $scope.logIn = function() {
      console.log('called');
    	User.logIn($scope.email, $scope.password, {
    		success: function(user) {
          if (user) {
              $rootScope.currentUser = user;
              var pp = user.get('patientPointer');
              var dp = user.get('doctorPointer');
              if (($scope.type == 'Patient') && pp) {
               console.log('patient');
               $scope.$apply(function(){
                  $location.path('/patient/profile')
               })
              }
              else if (($scope.type == 'Doctor') && dp) {
                console.log('doctor')
                UI.redirect('/profile/doctor');
              }
              else
                alert("You're attempting to log in as someone you are not");
          }
          else {
              var sUp = confirm('This email was not found in our database. Would you like to sign up?');
              if (sUp === true) UI.redirect('/#/signup');
          }
    		},
    		error: function(user, error) {
    			alert('Invalid username/password combination' + error.code + ' ' + error.message);
    		}
    	});
    };

  }]);
