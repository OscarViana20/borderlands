/**
 * Created by Oscar Viana 01/11/2015.
 */
import angular from 'angular';
import menuModule from '../menuModule';

/*
* Controlador del menu de talentos
*/
class MenuController {
    /*@ngInject*/
    constructor(lodash, menuService) {
        this.lodash = lodash;
        this.menuService= menuService;
        this.reset();
    }

    /*
    * Permite restaurar los valores iniciales del arbol de talentos
    */
    reset(){
        this.skills = this.menuService.getSkillsClone();
        this.menuService.setSkillsClone(this.lodash.clone(this.skills, true));
    }
}

menuModule.controller('MenuController', MenuController);
export default menuModule;
