const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
});

gulp.task('copiar', () => {
    gulp.src('pastaA/*.txt')
        .pipe(gulp.dest('pastaC'))
    console.log('copando')
});


gulp.task('fim', () => {
    console.log('cabo')
});