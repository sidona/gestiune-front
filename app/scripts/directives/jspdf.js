'use strict';

/**
 * @ngdoc directive
 * @name gestiuneFrontApp.directive:jspdf
 * @description
 * # jspdf
 */
angular.module('gestiuneFrontApp')
  .directive('jspdf', function () {
    return {
      template: '',
      scope:{},
      transclude:true,
      link: function postLink(scope, element, attrs) {
        scope.exportPdf = function () {
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
            doc.save('sample-file.pdf');
          });
        }
      }
    };
  });
