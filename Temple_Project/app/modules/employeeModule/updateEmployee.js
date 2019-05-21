(function() {
    'use strict';

    angular.module('templeSevaUiApp').controller('UpdateEmployeeController', UpdateEmployeeController);

    function UpdateEmployeeController($scope, $http, $rootScope, $modal, $location, $window, record) {
        var modalInstance;
        console.log("Employee Details");
        $scope.employee = {};
	    function init(){
        $scope.employee.id = record.id;
		$scope.employee.employeeName = record.employeeName;
		$scope.employee.team = record.team;
		$scope.employee.date = record.date;
		$scope.employee.address = record.address;
        }
        $scope.updateEmp = function () {
            $scope.cancelModal();

            if(!angular.isDefined($scope.employee.employeeName) || $scope.employee.employeeName === '') {
                alert('employee_name is empty');
                return;
            }
            else if(!angular.isDefined($scope.employee.team) || $scope.employee.team === '') {
                alert('employee_team is empty');
                return;
            }else if(!angular.isDefined($scope.employee.date) || $scope.employee.date === '') {
                alert('employee_date is empty');
                return;
            }else if(!angular.isDefined($scope.employee.address) || $scope.employee.address === '') {
                alert('employee_address is empty');
                return;
            }
            $scope.updateRecord($scope.employee);
        }
        init();

        $scope.updateRecord = function(params) {
            $http.post("http://localhost:8090/updateEmployeeDetails", params)
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
        
            UpdateEmployeeController.$inject = ['$scope', '$http', '$rootScope', '$modal', '$location', '$window', 'record'];
        })();