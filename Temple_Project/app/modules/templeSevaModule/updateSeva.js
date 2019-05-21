(function() {
    'use strict';

    angular.module('templeSevaUiApp').controller('UpdateSevaController', UpdateSevaController);

    function UpdateSevaController($scope, $http, $rootScope, $modal, $location, $window, record) {
        var modalInstance;
        console.log("Seva Details");
        $scope.employee = {};
	    function init(){
        $scope.seva.id = record.id;
		$scope.seva.sevaName = record.sevaName;
		$scope.seva.price = record.price;
        }
        $scope.updateSeva = function () {
            $scope.cancelModal();

            if(!angular.isDefined($scope.seva.sevaName) || $scope.seva.sevaName === '') {
                alert('sevaName is empty');
                return;
            }
            else if(!angular.isDefined($scope.seva.price) || $scope.seva.price === '') {
                alert('price is empty');
                return;
            }
            $scope.updateRecord($scope.seva);
        }
        init();

        $scope.updateRecord = function(params) {
            $http.post("http://localhost:8090/updateSevaDetails", params)
                .then(function(response){
                    console.log(response);
                    $scope.getData();
                });
        };

        $scope.getData = function() {
            console.log("Get data")
            $window.location.reload();
            $location.path("/sevaList" ); 
        }    
            };
        
            UpdateSevaController.$inject = ['$scope', '$http', '$rootScope', '$modal', '$location', '$window', 'record'];
        })();