'use strict';

/**
 * @ngdoc service
 * @name gestiuneFrontApp.customer
 * @description
 * # customer
 * Service in the gestiuneFrontApp.
 */
angular.module('gestiuneFrontApp')
  .service('customer', function ($resource) {
   return $resource('http://localhost:8080/getAllCustomer')
  });
