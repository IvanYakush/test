var gulp     = require('gulp'),
    sass     = require('gulp-sass'),
    del      = require('del'),
    prefixer = require('gulp-autoprefixer'),
    rename   = require('gulp-rename'),
    wait     = require('gulp-wait'),
    cssmin   = require('gulp-clean-css'),
    browserSync = require('browser-sync').create();

// BrowserSync
    gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

// Compile scss to css
gulp.task('sass', function () {
  return gulp.src('./app/sass/*.scss')
    .pipe(wait(500))
    .pipe(sass())
    .pipe(prefixer({
      browsers: ['last 15 versions'],
      cascade: false
    }))
    .pipe(cssmin({ compatibility: '*' }))
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest('./app/css'));
});

// Gulp clear dist folder
gulp.task('clean', function () {
  return del.sync('dist');
});

// Gulp Watch
gulp.task('watch', ['sass'], function () {
  gulp.watch('./app/sass/*.scss', ['sass']);
});

// Gulp Build
gulp.task('build', ['clean', 'sass'], function () {
  var buildCss = gulp.src('./app/css/*.css')
    .pipe(gulp.dest('./dist/css/'))

  var bildLibsCss = gulp.src('./app/plugins/**/**.css')
    .pipe(cssmin())
    .pipe(rename(function (path) {
      if (path.basename.indexOf('.min') === -1) {
        path.basename += '.min';
      }
    }))
    .pipe(gulp.dest('./dist/css'));

  var bildLibsJs = gulp.src('./app/plugins/**/*.js')
    .pipe(gulp.dest('./dist/js/'));

  var buildImg = gulp.src('./app/img/*')
    .pipe(gulp.dest('./dist/img/'))

  var buildFonts = gulp.src('./app/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts/'))

  var buildFavicon = gulp.src('./app/favicon.ico')
    .pipe(gulp.dest('./dist/'))

  var buildHtml = gulp.src('./app/*.html')
    .pipe(gulp.dest('./dist/'));
});

// Gulp Default
gulp.task('default', ['watch']);