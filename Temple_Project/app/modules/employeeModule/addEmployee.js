(function() {
    'use strict';

    angular.module('templeSevaUiApp').controller('AddEmployeeController', AddEmployeeController);

    function AddEmployeeController($scope, $http, $rootScope, $modal, $location, $window, ngToast) {
        var modalInstance;
        console.log("Save Employee Details");
        $scope.saveEmp = function () {
            console.log("Save Employee");
            $scope.datas = {};

            if(!angular.isDefined($scope.employee_name) || $scope.employee_name === '') {
                alert('employee_name is empty');
                return;
            }
            else if(!angular.isDefined($scope.employee_team) || $scope.employee_team === '') {
                alert('employee_team is empty');
                return;
            }else if(!angular.isDefined($scope.employee_date) || $scope.employee_date === '') {
                alert('employee_date is empty');
                return;
            }else if(!angular.isDefined($scope.employee_address) || $scope.employee_address === '') {
                alert('employee_address is empty');
                return;
            }else {
				$scope.datas.employeeName = $scope.employee_name;
				$scope.datas.team = $scope.employee_team;
                $scope.datas.date = $scope.employee_date;
                $scope.datas.address = $scope.employee_address;
				console.log($scope.datas);
			}
            $scope.cancelModal();
            $scope.saveRecord($scope.datas);
        };

        $scope.saveRecord = function(params) {
            console.log(params);
            $http.post("http://localhost:8090/saveEmployeeDetails", params)
                .then(function(response){
                    console.log(response);
                    $scope.getData();
                });
        };

        $scope.getData = function() {
            console.log("Get data")
            $window.location.reload();
            $location.path("/employee" ); 
        }    
            };
        
            AddEmployeeController.$inject = ['$scope', '$http', '$rootScope', '$modal', '$location', '$window', 'ngToast'];
        })();