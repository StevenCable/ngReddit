import angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import {DefaultState, DefaultCtrl} from './default';
import {AwwState, AwwCtrl, AwwService, AwwServiceName} from './aww';
import {ProgHumourState, ProgHumourCtrl, ProgHumourService, ProgHumourServiceName} from './programmerhumor';


import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html')
  };
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
  .config(($stateProvider) => {
  $stateProvider
    .state(DefaultState.name, DefaultState)
    .state(AwwState.name, AwwState)
    .state(ProgHumourState.name, ProgHumourState)

  })
  .run(($state) => {
    $state.go('default');
  })  
  .directive('app', app)
  .service(AwwServiceName, AwwService)
  .service(ProgHumourServiceName, ProgHumourService)
  .controller(DefaultState.controller, DefaultCtrl)
  .controller(AwwState.controller, AwwCtrl)
  .controller(ProgHumourState.controller, ProgHumourCtrl);

export default MODULE_NAME;