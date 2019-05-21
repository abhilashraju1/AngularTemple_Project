(function() {
    'use strict';

    angular.module('templeSevaUiApp').controller('CreateSevaController', CreateSevaController);

    function CreateSevaController($scope, $http, $rootScope, $modal, $location, $window, sevaListRecord) {
        var modalInstance;
        
        $scope.createSevaReciept = function () {
            $scope.cancelModal();

            if(!angular.isDefined($scope.seva.devoteeName) || $scope.seva.devoteeName === '') {
                alert('devoteeName is empty');
                return;
            }
            else if(!angular.isDefined($scope.seva.price) || $scope.seva.price === '') {
                alert('price is empty');
                return;
            }
            $scope.createSevaReceiptRecord($scope.seva);
        }

        $scope.export = function() {
            html2canvas(document.getElementById('exportthis'), {
              onrendered: function(canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                  content: [{
                    image: data,
                    width: 500,
                  }]
                };
                pdfMake.createPdf(docDefinition).download("test.pdf");
              }
            });
          }
    }
            CreateSevaController.$inject = ['$scope', '$http', '$rootScope', '$modal', '$location', '$window', 'sevaListRecord'];
        })();