//Main module
import gulp from "gulp";
//Path imports
import { path } from "./gulp/config/path.js";
//Import of common plagens
import { plugins } from "./gulp/config/plugins.js";

// Passing the value in the global variations
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Import task
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

//Monitoring for changes in the files
function watcher() {
    gulp.watch(path.watch.files, copy);   // to upload to FTP change:  copy -> gulp.series(copy,ftp) 
    gulp.watch(path.watch.html, html);    // to upload to FTP change:  html -> gulp.series(html,ftp) 
    gulp.watch(path.watch.scss, scss);    // to upload to FTP change:  scss -> gulp.series(scss,ftp) 
    gulp.watch(path.watch.js, js);        // to upload to FTP change:  js -> gulp.series(js,ftp) 
    gulp.watch(path.watch.images, images);// to upload to FTP change: images -> gulp.series(images,ftp) 
}

export { svgSprive }

//Consistent font processing 
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//Main task
const mainTask = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

//Build scenarios execute task 
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTask);
const deployZIP = gulp.series(reset, mainTask, zip);
const deployFTP = gulp.series(reset, mainTask, ftp);


// Export scenarios
export { dev }
export { build }
export { deployZIP }
export { deployFTP }

//Execute the default script
gulp.task('default', dev);

