'use strict';

var angular = require('angular');

process.env.appversion = require('../package.json').version;

var requires = [];

angular.module('mi-vmpro-md-app', requires);

angular.bootstrap(document, ['mi-vmpro-md-app']);
