'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./app/styles/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/styles/temp'));
});

gulp.task('sass:watch', function (done) {
    gulp.watch('./app/styles/scss/**', gulp.series('sass', 'autoprefixer'));
    done()
});

gulp.task('autoprefixer', () =>
    gulp.src('app/styles/temp/index.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/styles/css/'))
);