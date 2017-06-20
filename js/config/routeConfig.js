angular.module("myApp").config(function ($routeProvider) {
    $routeProvider.when("/detalhe1", {
        templateUrl: "view/detalhe1.html",
        controller: "appCtrl"
    });
    $routeProvider.when("/CadastroProdutos", {
        templateUrl: "view/CadastroProdutos.html",
        controller: "novoFormCtrl"
    });
    $routeProvider.when("/form", {
        templateUrl: "view/form.html",
        controller: "appCtrl"
    });
    $routeProvider.when("/formulario", {
        templateUrl: "view/formulario.html",
        controller: "novoFormCtrl"
    });
    $routeProvider.when("/ngtable", {
        templateUrl: "view/ngtable.html",
        controller: "ngTableCtrl as demo"
    });
    $routeProvider.when("/listaClientes", {
        templateUrl: "view/listaClientes.html",
        controller: "listaClientesCtrl"
    });
    $routeProvider.otherwise({redirectTo: "/detalhe2"});
});