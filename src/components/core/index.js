'use strict';

var RoutingConfig = require('./config/routing');

module.exports = angular.module('core', []);

angular.module('core')
  //.controller('AppController', require('./controller/AppController'))
  //.config(function ($stateProvider, $translatePartialLoaderProvider) {
  .config(function ($stateProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
    //$translatePartialLoaderProvider.addPart('core');
  })
;

