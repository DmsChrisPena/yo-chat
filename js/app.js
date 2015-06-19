var app = angular.module("chrisApp", ["firebase"]);

app.controller("chrisCtrl", ["$scope", "$firebaseArray", "$firebaseObject", 
	function($scope, $firebaseArray, $firebaseObject) {
		//Please don't steal my FireBase :(
		var ref = new Firebase("https://yoboredprofile.firebaseio.com");
		$scope.messages = $firebaseArray(ref);

		//Add Message Enter
		$scope.addMessage = function(e) {

		  if (e.keyCode === 13 && $scope.myMessage) {

		    var myName = $scope.myName;
		    var myMessage = $scope.myMessage;

		    $scope.messages.$add({ from: myName, body: myMessage});

		    $scope.myName = "";
		    $scope.myMessage = "";
		  }
		}

		//Click Add Message
		$scope.clickAddmessage = function(e) {

		    var myName = $scope.myName;
		    var myMessage = $scope.myMessage;

		    $scope.messages.$add({ from: myName, body: myMessage});

		    $scope.myName = "";
		    $scope.myMessage = "";
		}

		//Delete Message
		var list = $firebaseArray(ref);
		var listIndexnumber = list.$index;
		console.log(list);

		$scope.deleteMessage = function(e) {
			var item = list[this.$index];
			list.$remove(item).then(function(ref) {
			  ref.key() === item.$id;
			});
		}
	}
]);

