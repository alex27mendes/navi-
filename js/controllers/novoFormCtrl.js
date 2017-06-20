angular.module("myApp").controller("novoFormCtrl", function($scope, $http){
    $scope.preco = 0;
   // $scope.produto = [];
    $scope.produtos = [
      {nome: "Computador", categoria: "Novo"}
    ]; 
    $http.get("http://localhost:83/dbloja/api/categorias").success(function (data) {
        $scope.categorias = data.rows;
    })
    .error(function () {

    });
 /*   $scope.categorias = [
      {idcategoria: 1, nome: "Novo"},
      {idcategoria: 2, nome: "testes"}
    ]; */
    $scope.adicionarProduto = function (prod) {
        console.log("inserido1");
      //  $scope.produtos.push(angular.copy(produto));
        
        $scope.produto = {
           // idproduto: 4,
            categoriaIdcategoria: prod.idcategoria,
            descricao: prod.descricao
        };
        $http.post("http://localhost:83/dbloja/api/produto", $scope.produto).success(function(data){
            console.log("inserido");
        })
       // delete $scope.produto;
       // $scope.produtoForm.$setPristine();
    };
    $scope.adicionarLivro = function(livros){
            console.log(livros);
         /*   $http.post("http://localhost:83/livraria/api/livros").success(function (livro, status){
                delete $scope.livro;
                    
            });*/  
        $http.post("http://localhost:83/livraria/api/livros", livros);
    };  
                                   
});