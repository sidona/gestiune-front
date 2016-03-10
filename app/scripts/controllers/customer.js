'use strict';

/**
 * @ngdoc function
 * @name gestiuneFrontApp.controller:CustomerCtrl
 * @description
 * # CustomerCtrl
 * Controller of the gestiuneFrontApp
 */
angular.module('gestiuneFrontApp')
  .controller('CustomerCtrl', function ($scope, customer) {
    customer.query(function (data) {
      $scope.customers = data;
    })
  });
