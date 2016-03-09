'use strict';

/**
 * @ngdoc function
 * @name gestiuneFrontApp.controller:ProductdetailCtrl
 * @description
 * # ProductdetailCtrl
 * Controller of the gestiuneFrontApp
 */
angular.module('gestiuneFrontApp')
  .controller('ProductDetailCtrl', function ($scope, $stateParams, detailProduct,deleteProduct) {
    $scope.productDetail = detailProduct.get({id: $stateParams.id})
  });
