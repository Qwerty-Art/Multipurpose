'use strict';

var gulp = require('gulp'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	csso = require('gulp-csso'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create(),
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin');

gulp.task('serve', function () {
	browserSync.init({
		server: {
			baseDir: "./build"
		}
	});
});

gulp.task('pug', function () {
	return gulp.src('app/pug/pages/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('build'))
		.on('end', browserSync.reload)
});

gulp.task('sass', function () {
	return gulp.src('app/static/sass/*.sass')
		.pipe(sourcemaps.init())
		.pipe(sass({
			'include css': true
		}))
		.pipe(autoprefixer({
			browsers: ['last 10 versions'],
			cascade: false
		}))
		.on("error", notify.onError({
			message: "Error: <%= error.message %>",
			title: "Sass"
		}))
		.pipe(csso({}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('imagemin', function () {
	return gulp.src('app/static/img/**/*')
		.pipe(imagemin({
			interlaced: true,
			progressive: true,
			optimizationLevel: 5,
			svgoPlugins: [{ removeViewBox: true }]
		}))
		.pipe(gulp.dest('build/img/'))
});

gulp.task('script:libs', function () {
	return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/slick-carousel/slick/slick.js'])
		.pipe(concat('libs.min.js'))
		.pipe(gulp.dest('build/js/'))
		.pipe(browserSync.reload({
			stream: true
		}))
})

gulp.task('script', function () {
	return gulp.src('app/static/js/main.js')
		.pipe(gulp.dest('build/js/'))
		.pipe(browserSync.reload({
			stream: true
		}))
})

gulp.task('watch', function () {
	gulp.watch('app/pug/**/*.pug', gulp.series('pug'));
	gulp.watch('app/static/sass/**/*.sass', gulp.series('sass'));
	gulp.watch('app/static/js/**/*.js', gulp.series('script'));
	gulp.watch('app/static/img/**/*', gulp.series('imagemin'));
});

gulp.task('default', gulp.series(
	gulp.parallel('watch', 'serve')
));
