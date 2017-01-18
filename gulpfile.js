var gulp = require("gulp");
var sass = require("gulp-sass");
var cssmin = require("gulp-cssmin");
var rename = require("gulp-rename");
var htmlmin = require("gulp-htmlmin");

gulp.task("styles", function(){
	return gulp.src("./source/scss/*.scss")
			.pipe(sass())
			.pipe(cssmin())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest("./dist/css"))
});

gulp.task("minify-html", function(){
	return gulp.src('./source/*.html')
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest('./dist'))
});

gulp.task('background', function(){
	gulp.watch('./source/scss/*.scss', ['styles']);
	gulp.watch('./source/index.html', ['minify-html']);
});