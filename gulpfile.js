var
    browserSync = require('browser-sync'),
    gulp = require ("gulp");

var reload  = browserSync.reload;

var paths = {
    html:['./app/index.html'],
    css:['./app/css/*.css'],
    js:['./app/js/*.js']
};

gulp.task('html', function(){
    gulp.src(paths.html).pipe(reload({stream:true}));
});

gulp.task('css', function(){
    gulp.src(paths.css).pipe(reload({stream:true}));
});

gulp.task('js', function(){
    gulp.src(paths.js).pipe(reload({stream:true}));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "./app"
        },
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.watch(paths.html, ['html']);
gulp.watch(paths.css, ['css']);
gulp.watch(paths.js, ['js']);

gulp.task('default', ['browserSync']);