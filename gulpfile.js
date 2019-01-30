'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/scss/*.scss', gulp.series('sass'));
});

