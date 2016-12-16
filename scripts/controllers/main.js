'use strict';

/**
* @ngdoc function
* @name pruebaApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the pruebaApp
*/
angular.module('pruebaApp')
.controller('MainCtrl', function ($scope) {
	$scope.tareas = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
});
