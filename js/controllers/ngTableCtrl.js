angular.module("myApp").controller("ngTableCtrl", function($scope, $http, NgTableParams){
    var self = this;
    var dataLivro = [];
    var originalData= [];
    $http.get("http://localhost:83/livraria/api/livroses").success(function (data, status){   
      //   dataLivro = data.rows;
        // console.log(data.rows); 
       // debugger;
         this.originalData = angular.copy(data.rows);
        self.tableParams = new NgTableParams({}, { dataset: data.rows});
        
        // return data.rows;
    }); 
    
 //   var data = [{nome: 'christian', idade: 21}, {nome: 'anthony', idade: 88}];
   // self.tableParams = new NgTableParams({}, { dataset: dataLivro});
    
    /* console.log("entrei"); 
    ngTableCtrl.$inject = ["NgTableParams", "ngTableSimpleList"];
    function ngTableCtrl(NgTableParams, simpleList) {
         var self = this;
         $http.get("http://localhost:83/livraria/api/livroses").success(function (data, status){   
            $scope.livros = data;
            console.log($scope.livros); 
             self.tableParams = new NgTableParams({}, { dataset: data});
        });
    }*/
   // var self = this;

 //   var originalData = angular.copy(simpleList);
    //console.log(data.rows);
    self.tableParams = new NgTableParams({}, {
      filterDelay: 0,
    //  dataset: angular.copy(data.rows);
    });

    self.cancel = cancel;
    self.del = del;
    self.save = save;

    //////////

    function cancel(row, rowForm) {
      var originalRow = resetRow(row, rowForm);
      angular.extend(row, originalRow);
    }

    function del(row) {
        console.log(originalData);
      _.remove(self.tableParams.settings().dataset, function(item) {
        return row === item;
      });
      self.tableParams.reload().then(function(data) { 
        if (data.length === 0 && self.tableParams.total() > 0) {
          self.tableParams.page(self.tableParams.page() - 1);
          self.tableParams.reload();
        }
      });
    }
    
    function resetRow(row, rowForm){
      row.isEditing = false;
      rowForm.$setPristine();
      self.tableTracker.untrack(row);
      return _.findWhere(originalData, function(r){
        return r.id === row.id;
      });
    }

    function save(row, rowForm) {
      var originalRow = resetRow(row, rowForm);
      angular.extend(originalRow, row);
    }

});