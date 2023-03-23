// Основной модуль
import gulp from 'gulp'
// Импорт путей
import { path } from './gulp/config/path.js'
// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js'

// Передаем значение в глобальную переменную
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins,
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build')
}

// Импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { css } from './gulp/tasks/css.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fonstStyle } from './gulp/tasks/fonts.js';
import { svgSprive } from './gulp/tasks/svgSprive.js';
import { zip } from './gulp/tasks/zip.js';

// Наблюдатель за изменениями в файлах
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.css, css); // для css-файлов
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
} // автоматическое добавление файлов

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fonstStyle)

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, css, js, images, svgSprive)); // параллельное выполнение задач

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server)); // последовательное выполнение задач
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip)

// Экспорт сценариев
export { dev }
export { build }
export { deployZIP }

// Выполнение сценария по умолчанию
gulp.task('default', dev);