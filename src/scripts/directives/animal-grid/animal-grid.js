/**
 * Created by leswilson on 24/12/2016.
 */
'use strict';

angular.module('packt')
  .directive('animalGrid', function () {

  return {
    restrict: 'EA',
    templateUrl: 'scripts/directives/animal-grid/animal-grid.html'
  };

});
