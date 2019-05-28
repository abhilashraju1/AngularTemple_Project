(function() {
    'use strict';

    angular.module('templeSevaUiApp').controller('UpdateUserController', UpdateUserController);

    function UpdateUserController($scope, $http, $rootScope, $modal, $location, $window, record) {
        var modalInstance;
        console.log("User Details");
        $scope.user = {};
	    function init(){
        $scope.user.id = record.id;
        $scope.user.userName = record.userName;
        $scope.user.password = record.password;
		$scope.user.confirmPassword = record.confirmPassword;
		$scope.user.email = record.email;
		$scope.user.phoneNumber = record.phoneNumber;
        }
        $scope.updateUser = function () {
            $scope.cancelModal();

            if(!angular.isDefined($scope.user.userName) || $scope.user.userName === '') {
                alert('userName is empty');
                return;
            }
            else if(!angular.isDefined($scope.user.password) || $scope.user.password === '') {
                alert('password is empty');
                return;
            }
            else if(!angular.isDefined($scope.user.confirmPassword) || $scope.user.confirmPassword === '') {
                alert('confirm password is empty');
                return;
            }
            else if(!angular.isDefined($scope.user.email) || $scope.user.email === '') {
                alert('email is empty');
                return;
            }
            else if(!angular.isDefined($scope.user.phoneNumber) || $scope.user.phoneNumber === '') {
                alert('phoneNumber is empty');
                return;
            }
            $scope.updateRecord($scope.user);
        }
        init();

        $scope.updateRecord = function(params) {
            $http.post("http://localhost:8090/updateUserDetails", params)
                .then(function(response){
                    console.log(response);
                    $scope.getData();
                });
        };

        $scope.getData = function() {
            console.log("Get data")
            $window.location.reload();
            $location.path("/usersList" ); 
        }    
            };
        
            UpdateUSerController.$inject = ['$scope', '$http', '$rootScope', '$modal', '$location', '$window', 'record'];
        })();