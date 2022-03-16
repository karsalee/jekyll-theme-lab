'use strict';

const gulp = require('gulp');
const sass= require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

function buildStyles() {
    return gulp.src('dev/sass/*.scss')
               .pipe(sass().on('error', sass.logError))
               .pipe(gulp.dest('dev/sass/'))
               .pipe(cleanCSS())
               .pipe(rename({suffix: '.min'}))
               .pipe(gulp.dest('assets/css'));
}

function buildScripts() {
    return gulp.src('dev/js/index.js')
               .pipe(uglify())
               .pipe(rename({suffix: '.min'}))
               .pipe(gulp.dest('assets/js'))
}

exports.buildStyles = buildStyles;
exports.buildScripts = buildScripts;
exports.default = gulp.series(buildStyles, buildScripts);

gulp.watch(['dev/sass/*.scss'], gulp.series(buildStyles));
gulp.watch(['dev/js/*.js'], gulp.series(buildScripts));