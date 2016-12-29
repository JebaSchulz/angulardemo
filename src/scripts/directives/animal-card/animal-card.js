/**
 * Created by leswilson on 24/12/2016.
 */
'use strict';

angular.module('packt')
  .directive('animalCard', function() {
    
    return {
      restrict: 'EA',
      scope: {
        animal: '=animalCard'
      },
      templateUrl: 'scripts/directives/animal-card/animal-card.html'
    };
  });
