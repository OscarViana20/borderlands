/**
 * Created by Oscar Viana 01/11/2015.
 */
import menuModule from '../menuModule';

/*
* Controlador que maneja la logica de cada talento en el arbol
*/
class SkillController{
    /*@ngInject*/
    constructor(lodash, gameConstants) {
        this.lodash = lodash;
        this.gameConstants = gameConstants;
        this.maxPoint = this.gameConstants.SKILL_ITEM.MAX_POINT; //maximo puntaje por nivel para habilitar el siguiente
    }

    /*
    * Permite agregar puntaje en cada talento
    */
    assignScore(){
        // si el nivel se encuentra habilitado
        if(this.level.status){
            //y el puntaje asignado es menor al disponible por talento
            if(this.skill.assignedScore < this.skill.remainingScore){
                this.skill.assignedScore = this.skill.assignedScore + 1;
                this.totalScore = this.totalScore + 1;
                this.calculateDataWin();
            }
            this.validateNextLevel();
        }
    }

    /*
    * Permite remover puntaje en cada talento
    * Habilitado con el boton derecho del mouse
    */
    removeScore(){
        //se el obtiene el numero del siguiente nivel
        let nextLevel = this.level.level + 1;

        //se obtiene el nivel
        let level = this.lodash.find(this.skillTree, (lvl) => {
            return lvl.level == nextLevel;
        });

        if(!this.lodash.isUndefined(level)){

            //puntaje sumado del total de los talentos del nivel actual
            let currentScore = 0;
            this.level.skills.forEach((sk)=>{
                currentScore = currentScore + sk.assignedScore;
            });

            let nextScore = 0;
            level.skills.forEach((sk)=>{
                nextScore = nextScore + sk.assignedScore;
            });

            //si el puntaje del nivel actual es menor que el maximo, no se remueve
            if(currentScore <= this.maxPoint && nextScore > 0){
                console.log('no remueve');
            }else{
                //si el puntaje del nivel actual es mayor a cero se resta
                if(this.skill.assignedScore > 0){
                    this.skill.assignedScore = this.skill.assignedScore - 1;
                    this.totalScore = this.totalScore - 1;
                    this.calculateDataWin();
                }

                //se inhabilita el nivel siguiente
                if(nextScore == 0){
                    level.status = 0;
                }
            }
        }
    }

    /*
    * Permite validar que el siguiente nivel se active los puntajes
    */
    validateNextLevel(){
        let scoreLevel = 0;
        this.level.skills.forEach((sk)=>{
            scoreLevel = scoreLevel + sk.assignedScore;
        });

        //si la suma del puntate entre los talento del nivel actual es igual al maximo
        if(scoreLevel == this.maxPoint){
            let nextLevel = this.level.level + 1;
            let level = this.lodash.find(this.skillTree, (lvl) => {
               return lvl.level == nextLevel;
            });

            //se habilita el siguiente nivel
            if(!this.lodash.isUndefined(level)){
                level.status = 1;
            }
        }
    }

    //muestra la descripcion del talento sobre el que se ubica el mouse
    addTips() {
        angular.element('.description').html(this.pullInformation()).addClass('show');
    }

    //se oculta la descripcion
    removeTips(){
        angular.element('.description').html('').removeClass('show');
    }


    //se calcula los valores ganados por punto agregado en el talento
    calculateDataWin(){
        this.skill.dataWin = this.skill.assignedScore * this.skill.dataBase;
        angular.element('.description').html(this.pullInformation());
    }


    //se agrega la informacion a la descripcion
    pullInformation(){
        let data = this.skill.dataWin == 0 ? this.skill.dataBase : this.skill.dataWin;
        return `<h2>` + this.skill.description.name + `</h2>
                <em> +` + data + `</em>% ` + this.skill.description.increases;
    }

    //permite mover la descripcion siguiendo al mouse
    moveTips(event){
        let elem = angular.element('.show');
        let sx = this.getScroll('scrollLeft', 'pageXOffset')
        let sy = this.getScroll('scrollTop', 'pageYOffset')
        let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        let xx = Math.min(event.pageX + 20 + elem[0].clientWidth, vw + sx - 20) - elem[0].clientWidth;
        let yy = Math.min(event.pageY + 20 + elem[0].clientHeight, vh + sy - 20) - elem[0].clientHeight;
        elem.css({'left' : xx + 'px', 'top' : yy + 'px'});
    }

    getScroll (scrollProp, offsetProp) {
        let documentElement = document.documentElement;
        if (documentElement.clientHeight) {
            return documentElement[scrollProp]
        }
        let body = document.body;
        return body[scrollProp]
    }

}

function skillDirective() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'components/game/components/menu/partials/skillTemplate.tpl.html',
        controller: SkillController,
        controllerAs: 'skillController',
        scope: true,
        bindToController: {
            skill: '=',
            level: '=',
            skillTree: '=',
            totalScore: '='
        }
    };
}


//directiva que habilita el click derecho
function rigthClick($parse){
    return function(scope, element, attrs, ngModelCtr) {
        let fn = $parse(attrs.rigthClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
}

menuModule.directive('skillDirective', skillDirective)
    .directive('rigthClick', rigthClick);

export default menuModule;
