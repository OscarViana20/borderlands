/**
 * Created by Oscar Viana 01/11/2015.
 */
import menuModule from '../menuModule';

/*
* Controlador que maneja la logica presente en cada arbol de talentos
*/
class SkillPanelController{
    /*@ngInject*/
    constructor(lodash) {
        this.lodash = lodash;
        this.keyMap = { UP: 38, DOWN: 40 };
        this.direction = { UP: 38, DOWN: 40 };
        this.name = this.skill.name; //nombre del arbol
        this.totalScore = this.skill.totalScore; //total de puntaje ganado por arbol
        this.skillTree = this.skill.skillTree; //arbol de talentos
    }
}

function skillPanelDirective() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'components/game/components/menu/partials/skillPanelTemplate.tpl.html',
        controller: SkillPanelController,
        controllerAs: 'skillPanelController',
        scope: true,
        bindToController: {
            skill: '='
        }
    };
}

menuModule.directive('skillPanelDirective', skillPanelDirective);

export default menuModule;
