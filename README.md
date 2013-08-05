# NgHtmlCompile

*ng-html-compile* is a simple directive for *Angualr JS* to bind and compile an Html fragment.

## Getting started

In your *index.html*:

```html
<html ng-app="MyApp">

	<body ng-controller="HomeCtrl">

		<div ng-html-compile="htmlTemplate"></div>
		<div>{{name}}</div>

		<script src="libs/angular.js"></script>
		<script src="libs/ngHtmlCompile.js"></script>
		<script src="script.js"></script>

	</body>

</html>
```

In your *script.js*:

```javascript
var myApp = angular.module('MyApp', ['ngHtmlCompile']);

function HomeCtrl($scope, $compile) {
	$scope.name = 'Camaron de la Isla';
	$scope.htmlTemplate = '<b>Name</b> <input type="text" ng-model="name" />';
};
```

