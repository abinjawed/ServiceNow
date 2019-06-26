<!DOCTYPE html>
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
  </head>

  
  <body>
  <div ng-app="">
    <p>Input something in the input box:</p>
    <p>Name: <input type="text" ng-model="name"></p>
    <p ng-bind="name"></p>
  </div>
  </body>
</html>
