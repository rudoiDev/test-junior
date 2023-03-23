export const copy = () => {
	return app.gulp.src(app.path.src.files)
	.pipe(app.gulp.dest(app.path.build.files))
} // получаем файлы src(), затем переносим файлы pipe() по указанным путям 