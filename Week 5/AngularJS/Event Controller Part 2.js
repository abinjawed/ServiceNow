<html ng-app="hello">
	<head>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js"></script>
	</head>
	
	<body ng-controller="helloCtrl">
	<!--  type in name, click button, 'Hello, Name' appears in div -->
		<input type="text" ng-model="cucumber" placeholder="Your name.."/>
		<button ng-click="click()">Click</button>
		
		<!--  conditional rendering: only render div if condition is truthy -->
		<div ng-if="cucumber">{{ output }}</div>
	</body>
	
	<script type="text/javascript">
		// initializes a module to use with ng-app
		angular.module("hello", []);
		
		// dependency example
		//angluar.module("hello", ["ngRoute"]);
		
		//no 'var app =' stuff
		angular.module("hello").controller("helloCtrl", function($scope){
			$scope.click = function(){
				var message = "Hello, " + $scope.cucumber;
				$scope.output = message;
			};
		});
	</script>
</html>
