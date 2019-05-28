(function() {
    'use strict';

    angular.module('templeSevaUiApp').controller('UserController', UserController);

    function UserController($scope, $http, $rootScope, $modal, $window, $location, toastr, $timeout) {
        console.log("User Contoller");
        var modalInstance = null;

        $scope.init = function() {
            console.log('User Function is called from init()...');
            $scope.usersList();
        }

    $scope.usersList = function() {
            $scope.user = {};
            var promise = $http({
                method: 'GET',
                url: "http://localhost:8090/getUsersList"
            });
            promise.success(function(data, status, headers, conf) {
                console.log("loaded again userList ", data);
                $scope.user = data;
                $scope.showAvailableUserData();
            });
			promise.error(function(data, status, headers, conf){

				console.log("Error response. request failed   ", status);
				console.log("data:---------",data);
                console.log(data.message);
                $location.path("/usersList" ); 
			});
        };

        $scope.editUserRecord = function(id){
            $scope.editrecord = {};
                var promise = $http({
                    method: 'GET',
                    url: "http://localhost:8090/getUserDetails/"+id
                });
                promise.success(function(data, status, headers, conf) {
                    console.log("loaded again myActiveTasks ", data);
                    $scope.editrecord = data;
                    modalInstance = $modal.open({
                        animation: false,
                        templateUrl: 'modules/usersModule/updateUser.html',
                        scope: $scope,
                        controller: 'UpdateUserController',
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
     
     $scope.deleteUserRecord = function(id) {
        if (confirm('Are you sure you want to delete this?')){
        $http.delete("http://localhost:8090/deleteUser/"+id)
            .then(function(response){
                console.log(response);
                toastr.success("User Name : " +id.userName, 'User Deleted Successfully');
                        $scope.$timeout(
                        $scope.getData(),5000);
                //$window.location.reload(); 
            })
    };
    }

$scope.getData = function() {
    console.log("Get data")
    $window.location.reload();
    $location.path("/userList"); 
    } 
    $scope.init(); 

$scope.showAvailableUserData = function(){
    $scope.currentUserPage = 0;
    $scope.availableUserPageSize = 10;
    $scope.availableUserDatalists = $scope.user;
    $scope.numberOfAvailableUserPages = function() {
    return Math.ceil($scope.user.length / $scope.availableUserPageSize);
    };
}

$scope.cancelModal = function(){
    modalInstance.dismiss('cancel');
   }
        $scope.init();
    };
    UserController.$inject = ['$scope', '$http', '$rootScope', '$modal', '$window', '$location', 'toastr', '$timeout'];
})();
