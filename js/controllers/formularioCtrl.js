angular.module("myApp").controller("formularioCtrl", function($http, $scope, config){
 //   $http.get("http://localhost:8080/cliente/getClientes/").success(function (data, status){
        $scope.adicionarProduto = function(livro){
            console.log(livro);
            $http.get("http://localhost:83/livraria/api/livros").success(function (livro, status){
                delete $scope.livro;
                    
            });  
        };                      
});