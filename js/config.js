let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.welcome', {
      url: '/',
      controller: 'WelcomeController',
      templateUrl: 'templates/welcome.tpl.html'
    })
    .state('root.login', {
      url: '/login',
      controller: 'LoginController',
      templateUrl: 'templates/login.tpl.html'
    })
    .state('root.createAcc', {
      url: '/createaccount',
      controller: 'CreateAccountController',
      templateUrl: 'templates/createAccount.tpl.html'
    })
    .state('root.createPuzz', {
      url: '/createpuzzle',
      controller: 'CreatePuzzleController',
      templateUrl: 'templates/createPuzzle.tpl.html'
    })
    .state('root.showPuzz', {
      url: '/puzzles',
      controller: 'PuzzleController',
      templateUrl: 'templates/displayPuzzles.tpl.html'
    })
    .state('root.profile', {
      url: '/profile',
      controller: 'ProfileController',
      templateUrl: 'templates/myPuzzles.tpl.html'
    })
    .state('root.game', {
      url: '/game',
      controller: 'GameController',
      templateUrl: 'templates/game.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;