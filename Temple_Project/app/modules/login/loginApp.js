(function() {
    'use strict';
   
    angular.module('templeSevaUiApp').controller('LoginCtrl', LoginCtrl);

    function LoginCtrl($scope, $state, http, AuthConfig, $modal, $location, ConfigURL,$timeout,$window,$rootScope,cache) {

        $('.message a').click(function(){
            $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
         });

        console.log("LoginCtrl called");

        $scope.loginForm = {
            username: null,
            password: null
        };
        $scope.login = function(){
            var reqBody = {
                "userName": $scope.loginForm.username, 
                "password": $scope.loginForm.password
            }
            console.log("Login Controller "+$scope.loginForm.username+$scope.loginForm.password);
            http({
                method: 'POST',
                data: reqBody,
                url: "http://localhost:8090/validateUsers",
                'headers': {
                    'Content-Type': 'application/json'
                }
            }).error(function(data, status, headers, config) {
                console.log("Error response. request failed   ", status);
                console.log(data);
            }).success(function(data, status, headers, config) {
                console.log(" claimTask success response !", data);
                console.log("status !", status);
                $location.path("/sevaList" ); 
            });
    }

    $scope.register = function(){
        var reqBody = {
            "userName": $scope.loginForm.username, 
            "password": $scope.loginForm.password,
            "confirmPassword": $scope.loginForm.confirmPassword,
            "email": $scope.loginForm.email,
            "phoneNumber": $scope.loginForm.phoneNumber 
        }
        http({
            method: 'POST',
            data: reqBody,
            url: "http://localhost:8090/saveRegisterUsers",
            'headers': {
                'Content-Type': 'application/json'
            }
        }).error(function(data, status, headers, config) {
            console.log("Error response. request failed   ", status);
            console.log(data);
        }).success(function(data, status, headers, config) {
            console.log(" claimTask success response !", data);
            console.log("status !", status);
            $location.path("/loginForm" ); 
        });
};
};

    LoginCtrl.$inject = ['$scope', '$state', '$http', 'AuthConfig', '$modal', '$location', 'ConfigURL','$timeout','$window','$rootScope', 'cache'];
})();