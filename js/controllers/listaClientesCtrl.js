angular.module("myApp").controller("listaClientesCtrl", function($http, $scope, config){
 //   $http.get("http://localhost:8080/cliente/getClientes/").success(function (data, status){
        $http.get("http://localhost:83/livraria/api/livroses").success(function (data, status){   
        $scope.livros = data;
        console.log($scope.livros); 
    });                       
});