'use strict';

angular.module('packt')
  .service('Arena', function(Animals, Terrains, Storage) {
    var Arena = this;

    var playedMatches = Storage.load('matches') || [];
    var favouriteAnimals = Storage.load('favorites') || {};

    var weights = {
      ferocity: 1,
      tenacity: 0.8
    };

    Arena.getPlayedMatches = function() {
      return playedMatches;
    };

    Arena.getFavouriteAnimals = function() {
      return favouriteAnimals;
    };

    Arena.generateMatchup = function() {
      var matchup = {};
      matchup.opponent = Animals.getRandomAnimal();
      matchup.terrain = Terrains.getRandomTerrain();

      return matchup;
    };

    Arena.calculateCombatScore = function(animal) {
      return ((animal.stats.ferocity * weights.ferocity) + (animal.stats.tenacity * weights.tenacity)) / 2;
    };

    Arena.calculateTerrainInfluence = function(animal, terrain) {
      var landInfluence = animal.stats.land * (terrain.stats.land / 10);
      var waterInfluence = animal.stats.water * (terrain.stats.water / 10);

      return (landInfluence + waterInfluence) / 20;
    };

    Arena.calculateTotalScore = function(animal, terrain) {
      var combatScore = Arena.calculateCombatScore(animal);
      var terrainInfluence = Arena.calculateTerrainInfluence(animal, terrain);
      return combatScore * terrainInfluence;
    };

    Arena.determineWinner = function(playerAnimal, opponentAnimal, terrain) {
      var playerScore = Arena.calculateTotalScore(playerAnimal, terrain);
      var opponentScore = Arena.calculateTotalScore(opponentAnimal, terrain);

      var outcome = playerScore === opponentScore ? 'draw' : playerScore > opponentScore ? 'player': 'opponent';

      playedMatches.push({
        player: playerAnimal.id,
        opponent: opponentAnimal.id,
        terrain: terrain.id,
        winner: outcome
      });

      if (!favouriteAnimals[playerAnimal.id]) {
        favouriteAnimals[playerAnimal.id] = 1;
      }
      else {
        favouriteAnimals[playerAnimal.id]++;
      }
      //
      // if(!favouriteAnimals[playerAnimal.id]) {
      //   favouriteAnimals[playerAnimal.id] = 0;
      // }
      // favouriteAnimals[playerAnimal.id] ++;

      Storage.save('favorites', favouriteAnimals);
      Storage.save('matches', playedMatches);

      return outcome;
    };

  });
