'use strict';

/**
 * @ngdoc overview
 * @name gestiuneFrontApp
 * @description
 * # gestiuneFrontApp
 *
 * Main module of the application.
 */
angular
  .module('gestiuneFrontApp', ['ui.router', 'ngResource']);

angular.module('gestiuneFrontApp')
  .config(function($httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })

angular.module('gestiuneFrontApp')
  .config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('product', {
      url: '/product',
      templateUrl: "views/product.html"
    });
  $stateProvider
    .state('addProduct', {
      url: '/product/addProduct',
      templateUrl: "views/addProduct.html"
    });
  $stateProvider
    .state('productDetail', {
      url: '/product/:id',
      templateUrl: "views/productDetail.html",
      controller: 'ProductDetailCtrl'
    });
    $stateProvider
      .state('customer', {
        url: '/customer',
        templateUrl: "views/customer.html"
      });
});