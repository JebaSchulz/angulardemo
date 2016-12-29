/**
 * Created by leswilson on 23/12/2016.
 */
'use strict';

angular.module('packt')
  .service('Storage', function(localStorageService) {

    var Storage = this;

    Storage.save = function(key, data) {
      localStorageService.set(key, data);
    };

    Storage.load = function(key) {
      return localStorageService.get(key);
    };
    
  });
