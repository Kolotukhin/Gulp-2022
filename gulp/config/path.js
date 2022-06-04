// Get name project folder
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // You can also use rootFolder
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        files: `${buildFolder}/files/`
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        //html: `${srcFolder}/*.pug`, //for pug 
        html: `${srcFolder}/*.html`, //for html
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        //html: `${srcFolder}/**/*.pug`, //for pug
        html: `${srcFolder}/**/*.html`, //for html
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: `${buildFolder}`,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}