import 'jquery';
import angular from 'angular';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-ui-router';
import 'ocLazyLoad';
import routing from './components/common/utils/routing';
import futureRoutes from './routes.json!';

/**
 * The main application module.
 * It depends upon {@link mod1} and {@link mod2}.
 */
var app = angular.module('app-game', ['ui.router', 'oc.lazyLoad', 'ngMaterial']);

app.config(routing(app, futureRoutes));

app.config(function ($urlRouterProvider, $locationProvider, $stateProvider, $httpProvider) {
    //$locationProvider.html5Mode(true);
    $httpProvider.useApplyAsync(true);
    //$urlRouterProvider.otherwise('/menu');
});

angular.element(document).ready(function () {
    angular.bootstrap(document.body, [app.name], {
        // strictDi: true
    });
});

export default app;
