import replace from "gulp-replace"; // Search and replace
import plumber from "gulp-plumber"; // Error handling
import notify from "gulp-notify"; // Message
import browsersync from "browser-sync"; // Local server
import newer from "gulp-newer"; // Checking the update
import ifPlugin from "gulp-if"; // Conditions of the vittles 

//Export object
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}