/**
 * Created by Oscar Viana 01/11/2015.
 */

import angular from 'angular';
import menuModule from '../menuModule';

//los arboles de talentos
import spiningJSON from 'components/game/config/spining.json!';
import cuningJSON from 'components/game/config/cuning.json!';
import bloodshedJSON from 'components/game/config/bloodshed.json!';

/*
* Servicio usado en el menu
* Lodash presta funciones para trabajar con arreglos
*/
class MenuService {

    /*@ngInject*/
    constructor(lodash) {
        let skills = [];
        skills.push(spiningJSON);
        skills.push(cuningJSON);
        skills.push(bloodshedJSON);
        this.skills = skills;

        //se obtiene una copia de los valores originales con los que ingreso el jugador
        this.skillsClone = lodash.clone(this.skills, true);
    }

    getSkills(){
        return this.skills;
    }

    setSkills(skills){
        this.skills = skills;
    }

    getSkillsClone(){
        return this.skillsClone;
    }

    setSkillsClone(skillsClone){
        this.skillsClone = skillsClone;
    }
}


menuModule.service('menuService', MenuService);
export default menuModule;
