import angular from 'angular';

class lagoProvider {
    constructor() {
        this.parent = '';
    }

//    parent(newParent) {
//        return arguments.length ? (this.parent = newParent) : this.parent;
//    }

    $get() {
        return {
            parent: this.parent + '.'

        };
    }
}

var Common = angular.module('CommonLibs', []).provider('lago', lagoProvider);
export default Common;




