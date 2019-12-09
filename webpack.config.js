"use strict";

module.exports = {
    entry: "./home", // файл, который нужно собирать
    output: { // куда выводить   
        filename: "build.js"
    }

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    // devtool: "source-map" for production
    devtool: "cheap-inline-module-source-map" // or eval for development
};