//Main module
import gulp from "gulp";
//Path imports
import { path } from "./gulp/config/path.js";
//Import of common plagens
import { plugins } from "./gulp/config/plugins.js";

// Passing the value in the global variations
global.app = {
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

//Monitoring for changes in the files
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

const mainTask = gulp.parallel(copy, html, scss, js, images);

//Build scprit execute task 
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));

//Execute the default script
gulp.task('default', dev);

