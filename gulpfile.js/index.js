// Include gulp & tools
gulp = require('gulp');
$ = require('gulp-load-plugins')();
runSequence = require('run-sequence');

// Get configs
_package = require('../package.json');
_paths = require('./config/paths');

// Require all tasks in /gulpfile/tasks
var requireDir = require('require-dir');
requireDir('./tasks', {
  recurse: true
});
