// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // путь к папке с результатом
const srcFolder = `./src`; // путь к папке с исходниками

// Создаем пути до файлов и папок
export const path = {
  build: {
    fonts: `${buildFolder}/fonts/`,
    images: `${buildFolder}/img/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`, // папка с результатом
  },
  src: {
    svgicons: `${srcFolder}/svgicons/*.svg`,
    svg: `${srcFolder}/img/**/*.svg`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    js: `${srcFolder}/js/app.js`,
    scss: `${srcFolder}/scss/style.scss`,
    css: `${srcFolder}/css/style.css`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`, // все файлы с любым названием с расширением
  },
  watch: {
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    css: `${srcFolder}/css/**/*.css`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
