<html ng-app="hello">
	<head>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.8/angular.min.js"></script>
	</head>
	
	<body ng-controller="helloCtrl">
	<!--  type in name, click button, 'Hello, Name' appears in div -->
		<input type="text" /> <button ng-click="click()">Click</button>
		<div></div>
	</body>
	
	<script type="text/javascript">
		angular.module("hello", []);
		// dependency example
		//angluar.module("hello", ["ngRoute"]);
		
		//no 'var app =' stuff
		angular.module("hello").controller("helloCtrl", function($scope){
			$scope.click = function(){
				window.alert('Yaas');
			};
		});
	</script>
</html>
