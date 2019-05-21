(function(){
    'use strict';
    angular.module('templeSevaUiApp')
        .controller('AboutCtrl', AboutController);

    function AboutController ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }
    AboutController.$inject = ['$scope'];
})();