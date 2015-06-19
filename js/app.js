var app = angular.module("chrisApp", ["firebase"]);

app.controller("chrisCtrl", ["$scope", "$firebaseArray", "$firebaseObject", 
	function($scope, $firebaseArray, $firebaseObject) {
		//Please don't steal my FireBase :(
		var ref = new Firebase("https://yoboredprofile.firebaseio.com");
		$scope.messages = $firebaseArray(ref);

		//ADD MESSAGE METHOD
		$scope.addMessage = function(e) {


		  if (e.keyCode === 13 && $scope.myMessage) {

		    var myName = $scope.myName;
		    var myMessage = $scope.myMessage;

		    $scope.messages.$add({ from: myName, body: myMessage});

		    $scope.myName = "";
		    $scope.myMessage = "";
		  }
		}

		$scope.clickAddmessage = function(e) {

		    var myName = $scope.myName;
		    var myMessage = $scope.myMessage;

		    $scope.messages.$add({ from: myName, body: myMessage});

		    $scope.myName = "";
		    $scope.myMessage = "";
		}

	}
]);


