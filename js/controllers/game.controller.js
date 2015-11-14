import $ from 'jquery';
import 'jquery-ui';

let GameController = function($scope) {
  $scope.puzzles = ["1", "2", "3", "4"];

  $(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });

};

GameController.$inject = ['$scope'];

export default GameController;