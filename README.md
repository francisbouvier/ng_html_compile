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

function HomeCtrl($scope) {
	$scope.name = 'Camaron de la Isla';
	$scope.htmlTemplate = '<b>Name</b> <input type="text" ng-model="name" />';
};
```

**Child scope**

If you use *ng-html-compile* inside a directive that create a child scope (like *ng-repeat*), be carrefull to use an object to define your model.
Otherwise the binding will be created with a new property created inside the child scope.

*index.html*
```html
<html ng-app="MyApp">

	<body ng-controller="HomeCtrl">

		<div ng-repeat="htmlTemplate in htmlTemplates">
			<span ng-html-compile="htmlTemplate"></span>
		</div>

		<div>{{author.name}}</div>

		<script src="libs/angular.js"></script>
		<script src="libs/ngHtmlCompile.js"></script>
		<script src="script.js"></script>

	</body>

</html>
```

*script.js*
```javascript
var myApp = angular.module('MyApp', ['ngHtmlCompile']);

function HomeCtrl($scope) {
	$scope.author = {
		name: 'Camaron de la Isla'
	};
	$scope.htmlTemplates = ['<b>Name</b> <input type="text" ng-model="author.name" />'];
};
```
