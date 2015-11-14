import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import 'angular-ui-sortable';

import config from './config';

import CreateAccountController from './controllers/createAccount.controller';
import CreatePuzzleController from './controllers/createPuzzle.controller';
import ProfileController from './controllers/myPuzzles.controller';
import LeadersController from './controllers/leaders.controller';
import LoginController from './controllers/login.controller';
import PuzzleController from './controllers/displayPuzzles.controller';
import WelcomeController from './controllers/welcome.controller';
import GameController from './controllers/game.controller';

import UserService from './services/user.service';
import GameService from './services/game.service';
import PuzzleService from './services/puzzle.service';

angular
  .module('app', ['ui.router', 'ngCookies', 'ui.sortable'])
  .config(config)
  .controller('CreateAccountController', CreateAccountController)
  .controller('CreatePuzzleController', CreatePuzzleController)
  .controller('ProfileController', ProfileController)
  .controller('LeadersController', LeadersController)
  .controller('LoginController', LoginController)
  .controller('PuzzleController', PuzzleController)
  .controller('GameController', GameController)
  .controller('WelcomeController', WelcomeController)
  .service('UserService', PlayerService)
  .service('GameService', GameService)
  .service('PuzzleService', PuzzleService)
;