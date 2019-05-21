(function() {
    'use strict';

    angular.module('templeSevaUiApp').controller('AddSevaController', AddSevaController);

    function AddSevaController($scope, $http, $rootScope, $modal, $location, $window, ionicToast, toastr, $timeout) {
        var modalInstance;
        console.log("Seva Details");
        $scope.saveSeva = function () {
            $scope.datas = {};

            if(!angular.isDefined($scope.seva_name) || $scope.seva_name === '') {
                alert('seva_name is empty');
                return;
            }
            else if(!angular.isDefined($scope.price) || $scope.price === '') {
                alert('price is empty');
                return;
            }else {
				$scope.datas.sevaName = $scope.seva_name;
				$scope.datas.price = $scope.price;
				console.log($scope.datas);
			}
            $scope.cancelModal();
            $scope.saveRecord($scope.datas);
        };

        $scope.saveRecord = function(params) {
            console.log(params);
            $http.post("http://localhost:8090/sevaDetails", params)
                .then(function(response){
                    console.log(response);
                    toastr.success("Seva Name : " +params.sevaName, 'Seva Added Successfully');
                    $scope.$timeout(
                    $scope.getData(),5000);    
                });
        };

        $scope.getData = function() {
            console.log("Get data")
            $window.location.reload();
            $location.path("/sevaList" ); 
            }    
            };
        
            AddSevaController.$inject = ['$scope', '$http', '$rootScope', '$modal', '$location', '$window', 'ionicToast', 'toastr', '$timeout'];
        })();