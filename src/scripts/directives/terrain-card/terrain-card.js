/**
 * Created by leswilson on 24/12/2016.
 */
'use strict';

angular.module('packt')
  .directive('terrainCard', function() {

    return {
      restrict: 'EA',
      scope: {
        terrain: '=terrainCard'
      },
      templateUrl: 'scripts/directives/terrain-card/terrain-card.html'
    };
  });
