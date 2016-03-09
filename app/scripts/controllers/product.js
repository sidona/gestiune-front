'use strict';

/**
 * @ngdoc function
 * @name gestiuneFrontApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the gestiuneFrontApp
 */
angular.module('gestiuneFrontApp')
  .controller('ProductCtrl', function ($scope,product) {
    //product.query(function (items,data) {
    //    for(var i=0;i<items.length;i++){
    //        $scope.products=data[i];
    //    }

    product.query(function(data){
      $scope.products=data;
    })





    $scope.exportPdf = function () {
      var doc = new jsPDF();
      var specialElementHandlers = {
        '#editor': function (element, renderer) {
          return true;
        }
      };
      $('#cmd').click(function () {
        doc.fromHTML($('#pdf').html(), 15, 15, {
          'width': 170,
          'elementHandlers': specialElementHandlers
        });
        doc.save('product-file.pdf');
      });
    }


  });
