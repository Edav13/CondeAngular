
angular.module("condeAngularApp")
.controller("AlumnoController", ["$scope", "$http", function($scope, $http) {

	$scope.alumnos = [
	{nombre: "Juan Blanco", telefono: "1423543", curso:"Segundo ESO"},
	{nombre: "Rosa Luxemburgo", telefono: "535443342", curso:"Primero ESO"},
	{nombre: "Alberto Herrera", telefono: "23465656", curso:"Segundo ESO"},
	{nombre: "Ana Mariño", telefono: "98655342", curso:"Tercero ESO"}
	];

}]);