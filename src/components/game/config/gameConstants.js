/**
 * Created by Oscar Viana 01/11/2015.
 */
import angular from 'angular';

function GameConstants(){
    let constants = {
        SKILL_ITEM: {
            MAX_POINT: 5
        }
    };
    return constants;
}

let gameConstantsModule = angular.module('gameConstantsModule', []);
gameConstantsModule.constant('gameConstants', GameConstants());
