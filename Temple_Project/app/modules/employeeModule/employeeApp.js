(function() {
    'use strict';

    angular.module('templeSevaUiApp').controller('EmployeeController', EmployeeController);

    function EmployeeController($scope, $http, $rootScope, $modal, $window, $location) {
        console.log("Employee Contoller");
        var modalInstance = null;

        $scope.init = function() {
            console.log('Employee Function is called from init()...');
            $scope.myActiveTasks();
            
        }

    $scope.myActiveTasks = function() {
            $scope.tasks = {};
            var promise = $http({
                method: 'GET',
                url: "http://localhost:8090/getAllDetails"
            });
            promise.success(function(data, status, headers, conf) {
                console.log("loaded again myActiveTasks ", data);
                $scope.tasks = data;
                $scope.showAvailableData();
            });
			promise.error(function(data, status, headers, conf){

				console.log("Error response. request failed   ", status);
				console.log("data:---------",data);
				console.log(data.message);
			});
        };

    $scope.addRecord = function(){
            modalInstance = $modal.open({
              animation: false,
              templateUrl: 'modules/mainModule/addEmployee.html',
              controller: 'AddEmployeeController',
              scope: $scope,
              size: '',
              resolve: {
              }
           });
           console.log("Modul Instance");
    
        }

    $scope.viewRecord = function(id){
            $scope.record = {};
            var promise = $http({
                method: 'GET',
                url: "http://localhost:8090/getEmployeeDetails/"+id
            });
            promise.success(function(data, status, headers, conf) {
                console.log("loaded again myActiveTasks ", data);
                $scope.record = data;
                modalInstance = $modal.open({
                    animation: false,
                    templateUrl: 'modules/mainModule/view.html',
                    scope: $scope,
                    size: ''
                })
            });
			promise.error(function(data, status, headers, conf){

				console.log("Error response. request failed   ", status);
				console.log("data:---------",data);
				console.log(data.message);
            }); 
     };

     $scope.editRecord = function(id){
        $scope.editrecord = {};
            var promise = $http({
                method: 'GET',
                url: "http://localhost:8090/getEmployeeDetails/"+id
            });
            promise.success(function(data, status, headers, conf) {
                console.log("loaded again myActiveTasks ", data);
                $scope.editrecord = data;
                modalInstance = $modal.open({
                    animation: false,
                    templateUrl: 'modules/mainModule/updateEmployee.html',
                    scope: $scope,
                    controller: 'UpdateEmployeeController',
                    size: '',
                    resolve: {
                        record: function () {
                            return data;
                        }
                    }
                })
            });
			promise.error(function(data, status, headers, conf){

				console.log("Error response. request failed   ", status);
				console.log("data:---------",data);
				console.log(data.message);
            }); 

 };
 
 $scope.deleteRecord = function(id) {
    if (confirm('Are you sure you want to delete this?')){
    $http.delete("http://localhost:8090/deleteEmployee/"+id)
        .then(function(response){
            console.log(response);
            $window.location.reload(); 
        });
    }
};

$scope.showAvailableData = function( ){

    $scope.currentPage = 0;
    $scope.availablePageSize = 5;
    $scope.availableDatalists = $scope.tasks;
    $scope.numberOfAvailablePages = function() {
                   return Math.ceil($scope.tasks.length / $scope.availablePageSize);
    };
            
   }

 $scope.cancelModal = function(){
    modalInstance.dismiss('cancel');
   }
        $scope.init();
    };

    EmployeeController.$inject = ['$scope', '$http', '$rootScope', '$modal', '$window', '$location'];
})();
