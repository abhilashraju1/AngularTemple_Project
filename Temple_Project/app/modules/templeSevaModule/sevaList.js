(function() {
    'use strict';

    angular.module('templeSevaUiApp').controller('SevaController', SevaController);

    function SevaController($scope, $http, $rootScope, $modal, $window, $location, toastr, $timeout) {
        console.log("Seva Contoller");
        var modalInstance = null;

        $scope.init = function() {
            console.log('Seva Function is called from init()...');
            $scope.sevaList();
            
        }

    $scope.sevaList = function() {
            $scope.seva = {};
            var promise = $http({
                method: 'GET',
                url: "http://localhost:8090/getAllSevaDetails"
            });
            promise.success(function(data, status, headers, conf) {
                console.log("loaded again sevaList ", data);
                $scope.seva = data;
                $scope.showAvailableData();
            });
			promise.error(function(data, status, headers, conf){

				console.log("Error response. request failed   ", status);
				console.log("data:---------",data);
				console.log(data.message);
			});
        };

    $scope.addSevaRecord = function(){
            modalInstance = $modal.open({
              animation: false,
              templateUrl: 'modules/templeSevaModule/addSeva.html',
              controller: 'AddSevaController',
              scope: $scope,
              size: '',
              resolve: {
              }
           });
           console.log("Modul Instance");
    
        }

        $scope.createSevaRecord = function(){
            $scope.sevaListRecord = {};
            var promise = $http({
                method: 'GET',
                url: "http://localhost:8090/getAllSevaDetails"
            });
            promise.success(function(data, status, headers, conf) {
                console.log("loaded seva list records ", data);
                $scope.sevaListRecord = data;
                modalInstance = $modal.open({
                    animation: false,
                    templateUrl: 'modules/templeSevaModule/createSevaReceipt.html',
                    controller: 'CreateSevaController',
                    scope: $scope,
                    size: '',
                    resolve: {
                        sevaListRecord: function () {
                            return data;
                        }
                    }
                })
            })
        }

    $scope.viewSevaRecord = function(id){
            $scope.record = {};
            var promise = $http({
                method: 'GET',
                url: "http://localhost:8090/getSevaDetails/"+id
            });
            promise.success(function(data, status, headers, conf) {
                console.log("loaded again sevaList ", data);
                $scope.record = data;
                modalInstance = $modal.open({
                    animation: false,
                    templateUrl: 'modules/templeSevaModule/viewSeva.html',
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

     $scope.editSevaRecord = function(id){
        $scope.editrecord = {};
            var promise = $http({
                method: 'GET',
                url: "http://localhost:8090/getSevaDetails/"+id
            });
            promise.success(function(data, status, headers, conf) {
                console.log("loaded again myActiveTasks ", data);
                $scope.editrecord = data;
                modalInstance = $modal.open({
                    animation: false,
                    templateUrl: 'modules/templeSevaModule/updateSeva.html',
                    scope: $scope,
                    controller: 'UpdateSevaController',
                    size: '',
                    resolve: {
                        record: function () {
                            return data;
                        }
                    }
                })
            });
			promise.error(function(data, status, headers, conf){

				console.log("Error response. request failed ", status);
				console.log("data:---------",data);
				console.log(data.message);
            }); 

 };
 
 $scope.deleteSevaRecord = function(id) {
    if (confirm('Are you sure you want to delete this?')){
    $http.delete("http://localhost:8090/deleteSeva/"+id)
        .then(function(response){
            console.log(response);
            toastr.success("Seva Name : " +id.sevaName, 'Seva Deleted Successfully');
                    $scope.$timeout(
                    $scope.getData(),5000);
            //$window.location.reload(); 
        });
};

$scope.getData = function() {
    console.log("Get data")
    $window.location.reload();
    $location.path("/sevaList"); 
    }    
    };

$scope.showAvailableData = function( ){

    $scope.currentPage = 0;
    $scope.availablePageSize = 10;
    $scope.availableDatalists = $scope.seva;
    $scope.numberOfAvailablePages = function() {
    return Math.ceil($scope.seva.length / $scope.availablePageSize);
    };
            
   }

 $scope.cancelModal = function(){
    modalInstance.dismiss('cancel');
   }
        $scope.init();
    };

    SevaController.$inject = ['$scope', '$http', '$rootScope', '$modal', '$window', '$location', 'toastr', '$timeout'];
})();
