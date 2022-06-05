#Command for launching in developer mode#
 - npm run dev

-------------------------------------------------------

#Command for launching in prodaction mode#
- npm run build
- Command for svg: npm run svgSprive
- Command deploy zip: npm run zip
-------------------------------------------------------

#customization Gulp-2022 steps#
Install Node.Js и Git 

Git bash:
npm init

Retrieve in package.json after  ""description": ""," :
  "main": "gulpfile.js",
  "type": "module",


Git bash:
    Install gulp if not installed globally:
    npm i gulp-cli -g

    Install gulp in the project:
    npm i gulp -D

Git bash:
npm i -D gulp-file-include

Install the extension for vscode: Path Autocomplete
Press F1 and find: Open Settings(JSON) 
  Add:
      "path-autocomplete.pathMappings":{
        "@img": "${folder}/src/img", // alias for images
        "@scss": "${folder}/src/scss", // alias for scss
        "@js": "${folder}/src/js", // alias for js
    },

Git bash:
npm i -D gulp-replace

npm i -D gulp-webp-html-nosvg

npm i -D gulp-version-number

npm i -D gulp-plumber gulp-notify

npm i -D gulp-pug

npm i -D browser-sync

npm i -D gulp-sass sass

npm i -D gulp-rename

npm i -D gulp-clean-css gulp-webpcss gulp-autoprefixer gulp-group-css-media-queries

npm i -D webp-converter@2.2.3

npm i -D webpack webpack-stream

npm i -D swiper

npm i -D gulp-webp gulp-imagemin

npm i -D gulp-newer

npm i -D gulp-fonter gulp-ttf2woff2

npm i -D gulp-svg-sprite

npm i -D gulp-if

npm i -D gulp-zip

npm i -d vinyl-ftp gulp-util




