import 'ui-router-extras';
import Common from './lagoProvider';

var routing = function (module, futureRoutes) {

  module.requires.push('ct.ui.router.extras.future');
  module.requires.push(Common.name);

  var RouterConfig = ['$stateProvider', '$futureStateProvider', 'lagoProvider',
                        function ($stateProvider, $futureStateProvider, lagoProvider) {


      $futureStateProvider.stateFactory('load', ['$q', '$ocLazyLoad', 'futureState',
                                                   function ($q, $ocLazyLoad, futureState) {
          let def = $q.defer();

          let views = JSON.stringify(eval('(' + futureState.views + ')'));
          console.info(views);


          if (futureState.parent) {
            lagoProvider.parent = futureState.parent;
            console.info('Padre desde la routing: ' + lagoProvider.$get().parent);
          }

          System.import(futureState.src).then(loaded => {
            var newModule = loaded;
            if (!loaded.name) {
              var key = Object.keys(loaded);
              newModule = loaded[key[0]];
            }

            $ocLazyLoad.load(newModule).then(function () {
              def.resolve();
            });
          });
          return def.promise;
    }]);

      futureRoutes.forEach(function (r) {
        $futureStateProvider.futureState(r);
      });

  }];

  return RouterConfig;
};

export default routing;
