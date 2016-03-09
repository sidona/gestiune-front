'use strict';

/**
 * @ngdoc service
 * @name gestiuneFrontApp.product
 * @description
 * # product
 * Service in the gestiuneFrontApp.
 */
angular.module('gestiuneFrontApp')
  .service('product', function ($resource) {
    return $resource('http://localhost:8080/getAllProduct');
  });
angular.module('gestiuneFrontApp').service('addProduct',function($resource){
  return $resource('http://localhost:8080/newProduct',
    {
      post:{method:'POST'}
    })
});

angular.module('gestiuneFrontApp').service('detailProduct',function($resource){
  return $resource('http://localhost:8080/product/:id',{id:'id'},
    {
      post:{method:'POST'}
    })
});


angular.module('gestiuneFrontApp').service('deleteProduct',function($resource){
  return $resource('http://localhost:8080/deleteProduct/:name',{name:'name'},
    {
      post:{method:'POST'},
      remove:{method:'DELETE'}
    })
});