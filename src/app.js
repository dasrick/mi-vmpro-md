'use strict';

var angular = require('angular');

process.env.appversion = require('../package.json').version;

require('angular-material');
require('angular-ui-router');

var requires = [
  'ngMaterial',
  'ui.router',
  require('./components').name
];

angular.module('mi-vmpro-md-app', requires)
  // material - theming ////////////////////////////////////////////////////////////////////////////////////////////////
  //.config(function ($mdThemingProvider) {
  //  $mdThemingProvider.theme('default')
  //    .primaryPalette('green')
  //    //.accentPalette('orange')
  //  ;
  //})
  // ===================================================================================================================

  // material - theming ABSOLUTELY CUSTOM //////////////////////////////////////////////////////////////////////////////
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.definePalette('mi24', {
      '50': '#e6f4eb',
      '100': '#b3dfc4',
      '200': '#80c99c',
      '300': '#55b77b',
      '400': '#2aa55a',
      '500': '#009339',
      '600': '#008132',
      '700': '#006e2b',
      '800': '#005c24',
      '900': '#004a1d',
      'A100': '#b3dfc4',
      'A200': '#80c99c',
      'A400': '#2aa55a',
      'A700': '#006e2b'

      // whether, by default, text (contrast)
      // on this palette should be dark or light
      //'contrastDefaultColor': 'light',

      //hues which contrast should be 'dark' by default
      //'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],

      // could also specify this if default was 'dark'
      //'contrastLightColors': undefined
    });
    $mdThemingProvider.theme('default')
      .primaryPalette('mi24')
  })
  // ===================================================================================================================
;

angular.bootstrap(document, ['mi-vmpro-md-app']);
