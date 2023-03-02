/*
 * Copyright (C) Highsoft AS
 */

const Gulp = require('gulp');

/* *
 *
 *  Tasks
 *
 * */

require('./dist-clean');
require('./dist-copy');
require('./dist-examples');
require('./dist-productsjs');
require('./jsdoc-dts');
require('./lint-dts');
require('./scripts-clean');
require('./scripts-compile');
require('./scripts-css');
require('./scripts-js');

Gulp.task(
    'dist',
    Gulp.series(
        'scripts-clean',
        'scripts-css',
        'scripts-ts',
        'scripts-js',
        'scripts-code',
        'scripts-es5',
        'scripts-compile',
        'dist-clean',
        'dist-copy',
        'jsdoc-dts',
        'lint-dts',
        'dist-compress'
    )
);
