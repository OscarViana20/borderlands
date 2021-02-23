/**
 * Created by Oscar Viana 01/11/2015.
 */

import angular from 'angular';

import MenuTemplate from './views/menu.tpl'; //pantalla principal
import SkillPanelTemplate from './partials/skillPanelTemplate.tpl'; //panel skill tree
import SkillTemplate from './partials/skillTemplate.tpl'; //skill

import Common from 'lagoProvider';
import 'components/game/config/gameConstants'; //constantes de la aplicacion


import 'angular-ui-router';
import 'angular-touch';
import 'ocLazyLoad';
import 'ng-lodash';
import 'app/assets/css/skillPanel.css!';

let menuModule = angular.module('menuModule', ['ui.router', 'ngTouch', 'ngLodash', 'gameConstantsModule',
MenuTemplate.name, SkillPanelTemplate.name, SkillTemplate.name]);

menuModule.config(['$stateProvider', function ($stateProvider) {

    $stateProvider.state('menu', {
        url: '/menu',
        views: {
            '': {
                templateUrl: MenuTemplate.name,
                controller: 'MenuController',
                controllerAs: 'menuController'
            }
        }
    });

}]);

export default menuModule;
