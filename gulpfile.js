var gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload,
	adjuster = require('gulp-css-url-adjuster'),
	flatten = require('gulp-flatten'),
	out = 'public';

function updateHTML() {
	gulp.src('index.html')
	.pipe(gulp.dest(out))
	.pipe(reload({ stream: true }));
}

function updateCSS() {
	gulp.src('blocks/**/*.css')
	.pipe(concat('css/style.css'))
	.pipe(adjuster({ prependRelative: '/../img/' }))
	.pipe(gulp.dest(out))
	.pipe(reload({ stream: true }));
}

function updateJS() {
	gulp.src('blocks/**/*.js')
	.pipe(concat('js/index.js'))
	.pipe(gulp.dest(out))
	.pipe(reload({ stream: true }));
}

function updateImages() {
	gulp.src('blocks/**/*.{png,svg,jpg}')
	.pipe(flatten())
	.pipe(gulp.dest(out + '/img'))
	.pipe(reload({ stream: true }));

}

function loadFonts() {
	gulp.src('fonts/*')
	.pipe(gulp.dest(out + '/fonts'))
}

gulp.task('server', function(done) {
	browserSync.init({
		server: 'public'
	});

	gulp.watch('*.html').on('change', () => {
		updateHTML();
	});

	gulp.watch('blocks/**/*.css').on('change', () => {
		updateCSS();
	});

	gulp.watch('blocks/**/*.css').on('add', () => {
		updateCSS();
	});

	gulp.watch('blocks/**/*.{png,svg,jpg}').on('add', () => {
		updateImages();
	});

	gulp.watch('blocks/**/*.js').on('add', () => {
		updateJS();
	});

	gulp.watch('blocks/**/*.js').on('change', () => {
		updateJS();
	});

	done();
});

gulp.task('html', function(done) {
	updateHTML();
	done();
});

gulp.task('css', function(done) {
	updateCSS();
	done();
});

gulp.task('js', function(done) {
	updateJS();
	done();
});

gulp.task('images', function(done) {
	updateImages();
	done();
});

gulp.task('fonts', function(done) {
	loadFonts();
	done();
});

gulp.task('build', gulp.series('html', 'css', 'js', 'images', 'fonts'));

gulp.task('default', gulp.series('server', 'build'));
