'use strict';
angular
.module('app')
.controller('prescriptionCtrl', function($scope) {
	$scope.checked = false;// if the patient have taken this pill: showing checked span
	$scope.unchecked = !$scope.checked;// else showing unchecked;
    console.log($scope.unchecked);

	// funtion: addZero
	// add 0 to one digit numbers to modify the format of time
	var addZero = function(i) {
          if (i < 10) {
              i = "0" + i;
          }
          return i;
        };


    $scope.month = "";
    $scope.date = "";
    var currentdate = new Date();

    $scope.month = addZero(currentdate.getMonth()+1);
    $scope.date = addZero(currentdate.getDate());
    console.log($scope.month);
    console.log(currentdate.getDate());
    // get the abbrevation of day_of_week
    
    var weekday = new Array(7);
	    weekday[0] = "Sun";
	    weekday[1] = "Mon";
	    weekday[2] = "Tue";
	    weekday[3] = "Wed";
	    weekday[4] = "Thu";
	    weekday[5] = "Fri";
	    weekday[6] = "Sat";

    $scope.day_of_week = weekday[currentdate.getDay()];
    console.log(currentdate.getDay());
    console.log($scope.day_of_week);
    // pill_info 
    // include the information of pills a patient should take, please retrieve from database
    $scope.pill_info = [
    	{
    		"index": "0",
    		"name" :"Antihistamine",
    		"note" :"Take after lunch",
    		"dose" :"2 tablets",
    		"time":"09:30",
    		"intro":"Here is the detailed introduction to this pill and prescription inforamtion"
    	},

        {
            "index": "1",
            "name" :"Sonata",
            "note" :"15 mins before bed time",
            "dose" :"1 tablets",
            "time":"11:30",
            "intro":"Here is the detailed introduction to this pill and prescription inforamtion"
        }
    ];

    //function:show_detail
    //click the the pill and show pill_detail
    $scope.showDetaili = true;
    $scope.show_detail = function(){
		$scope.showDetail = ! $scope.showDetail;
    };

});