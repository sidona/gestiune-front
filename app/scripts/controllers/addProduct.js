'use strict';

/**
 * @ngdoc function
 * @name gestiuneFrontApp.controller:AddproductCtrl
 * @description
 * # AddproductCtrl
 * Controller of the gestiuneFrontApp
 */
angular.module('gestiuneFrontApp')
  .controller('AddProductCtrl', function ($scope, addProduct, $state) {
    $scope.newProduct = new addProduct();

    $scope.addProduct = function () {
      $scope.newProduct.$save(function () {
        $state.go('/')
      })
    }
  });
