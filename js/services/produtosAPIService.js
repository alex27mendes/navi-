angular.module("myApp").factory("produtosAPI", function ($http, config)){
   
   var _getClientes = function () {
        return $http.get(config.baseUrl + "/getClientes");  
   }
   var _saveCliente = function (cliente) {
        return $http.post(config.baseUrl + "/addCliente/" + cliente.nome + ";" + cliente.cpf)
   }
   return {
       getClientes: _getClientes,
       saveCliente: _saveCliente
	   //te
   };
}