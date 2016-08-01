var 
	gulp   = require('gulp'),
	del    = require('del'),
	rename = require('gulp-rename'),
	less   = require('gulp-less'),
	cssmin = require('gulp-cssmin'),
	prefix = require('gulp-autoprefixer'),
	jsmin  = require('gulp-jsmin'),
	imgmin = require('gulp-imagemin'),
	juicer = require('gulp-juicer-js'),
	server = require('gulp-devserver'),
	essi   = require('essi'),
	yargs  = require('yargs').argv,
	htmlmin = require('gulp-htmlmin');

/**
 * 清除bulid目录
 */
gulp.task('clean', function() {
	console.log('test');
    del(['build']);
});

/**
 * CSS任务,less,加前缀,压缩
 */
gulp.task('css', function() {
    gulp.src('src/**/*.less')
      .pipe(less())
      .pipe(prefix())
      .pipe(cssmin())
      .pipe(rename(function( path ){
      	path.extname = '.css';
      }))
      .pipe(gulp.dest('build/'));
      console.log('css编译成功');
});

/**
 * js任务
 */
gulp.task('js', function() {
	gulp.src('src/**/*.js')
	  .pipe(jsmin())
	  .pipe(gulp.dest('build/'));    
	  console.log('js编译成功');
});

 /**
  * html 压缩
  */
gulp.task('html', function() {
    gulp.src('src/**/*.html')
      .pipe(htmlmin(''))
      .pipe(gulp.dest('build/'));
      console.log('html编译成功');
});

gulp.task('default',['clean', 'css', 'js', 'html']);
