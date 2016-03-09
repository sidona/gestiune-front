'use strict';

describe('Directive: jspdf', function () {

  // load the directive's module
  beforeEach(module('gestiuneFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jspdf></jspdf>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the jspdf directive');
  }));
});
