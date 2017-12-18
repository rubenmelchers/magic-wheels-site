var gulp = require("gulp"),
	sass = require("gulp-sass"),
	uglify = require("gulp-uglify"),
	gulpIf = require("gulp-if"),
	concat = require("gulp-concat"),
	imagemin = require("gulp-imagemin"),
	cache = require("gulp-cache"),
	autoprefixer = require("gulp-autoprefixer"),
	sourcemaps = require("gulp-sourcemaps"),
	csso = require("gulp-csso"),
	babel = require("gulp-babel");


/* NAME OF PROJECT HERE */
var project = "magicwheels";

var path = {
	sasssrc: ["src/scss/**/*.scss"],
	sassdest: "dist",

	scriptsrc: [
		"src/script/hamburger.js",
		"src/script/**/*.js"
	],
	scriptdest: "dist/js",

	imgsrc: "src/img/**/*.+(png|jpg|gif|svg)",
	imgdest: "dist/img"
}

gulp.task("sass", function() {
	return gulp.src(path.sasssrc)
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer({
			browsers: ["last 2 versions", "ie >= 9", "and_chr >= 2.3"],
			cascade: false
		}))
		.pipe(csso({
			restructure: true,
			sourceMap: true,
			debug: false
		}))
		.pipe(concat(project + '.css'))
		.pipe(gulp.dest(path.sassdest))
});

gulp.task("scripts", function() {
	return gulp.src(path.scriptsrc)
		.pipe(babel({
	            presets: ['env']
	        }))
		.pipe(sourcemaps.init())
		.pipe(concat(project + '.min.js'))
		.pipe(uglify().on('error', function(e) {
			console.log(e);
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.scriptdest))
});

gulp.task("images", function() {
	return gulp.src(path.imgsrc)
		.pipe(cache(imagemin({
			interlaced: true
		}))
		.pipe(gulp.dest(path.imgdest)))
});

gulp.task("watch", function() {
	gulp.watch(path.sasssrc, ["sass"]);
	gulp.watch(path.scriptsrc, ["scripts"]);
	gulp.watch(path.imgsrc, ["images"]);
});

gulp.task('default', ['watch'] );
