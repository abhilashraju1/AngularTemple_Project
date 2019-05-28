'use strict';

/**
 * @ngdoc overview
 * @name Vinston Sundara Pandiyan
 * @description Workflow UI Project
 * # templeSevaUiApp
 *
 * Main module of the application.
 */
angular
    .module('templeSevaUiApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ui.router',
        'ngSanitize',
        'ngTouch',
        'ngFileUpload',
        'angular-ui-confirm',
        'angularUtils.directives.dirPagination',
        'angularMoment',
        'angular-loading-bar',
        'ionic-toast',
        'toastr'
    ]);

var ConfigRoutes = function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/loginApplication',
            templateUrl: 'modules/login/loginApplication.html',
            controller: 'LoginCtrl'
        })
        .state('employee', {
            url: '/employee',
            templateUrl: 'modules/employeeModule/employee.html',
            controller: 'EmployeeController'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'modules/register/register.html',
            controller: 'RegisterCtrl'
        })
        .state('sevaList', {
            url: '/sevaList',
            templateUrl: 'modules/templeSevaModule/sevaList.html',
            controller: 'SevaController'
        })
        .state('usersList', {
            url: '/usersList',
            templateUrl: 'modules/usersModule/usersList.html',
            controller: 'UserController'
        })
};

angular.module('templeSevaUiApp').config(ConfigRoutes);
ConfigRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
